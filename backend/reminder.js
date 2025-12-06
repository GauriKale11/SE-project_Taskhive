const pool = require("./db");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
require("dotenv").config();

// Email setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, subject, text) {
  try {
    await transporter.sendMail({
      from: `"Task Manager" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error.message);
  }
}

async function checkReminders() {
  const client = await pool.connect();
  try {
    const query = `
      SELECT 
        r.reminder_id,
        r.reminder_time,
        r.status,
        t.title AS task_title,
        t.description,
        t.deadline,
        s.subject_name,
        u.email AS user_email,
        u.name AS user_name
      FROM reminders r
      JOIN tasks t ON r.task_id = t.task_id
      LEFT JOIN subjects s ON t.subject_id = s.subject_id
      JOIN users u ON t.user_id = u.user_id
      WHERE 
        (
          DATE(t.deadline) = DATE(NOW() + INTERVAL '1 day')  -- due tomorrow
          OR (t.deadline < NOW() AND r.status = 'Pending')   -- overdue pending
        );
    `;
    const result = await client.query(query);

    for (const row of result.rows) {
      const deadlineDate = new Date(row.deadline);
      const today = new Date();
      const deadlineDay = deadlineDate.setHours(0, 0, 0, 0);
      const todayDay = today.setHours(0, 0, 0, 0);

      let statusText = "";
      if (deadlineDay === todayDay) {
        statusText = "due today!";
      } else if (deadlineDay === todayDay + 24 * 60 * 60 * 1000) {
        statusText = "due tomorrow!";
      } else if (deadlineDay < todayDay) {
        statusText = "overdue!";
      }

      // Build descriptive message
      const subjectInfo = row.subject_name
        ? `Subject: ${row.subject_name}\n`
        : "";
      const descriptionInfo = row.task_description
        ? `Description: ${row.task_description}\n`
        : "";

      const message = `⏰ Reminder!\n
${subjectInfo}Task: ${row.task_title}\n${descriptionInfo}
Status: Your task is ${statusText}\n
Deadline: ${new Date(row.deadline).toLocaleString()}\n
Please complete it as soon as possible.`;

      await sendEmail(row.user_email, "📚 Task Deadline Reminder", message);

      // Update only if overdue
      if (deadlineDay < todayDay) {
        await client.query(
          `UPDATE reminders SET status = 'Sent' WHERE reminder_id = $1`,
          [row.reminder_id]
        );
      }
    }

    console.log(
      ` Reminder check completed at ${new Date().toLocaleString()}`
    );
  } catch (error) {
    console.error(" Error checking reminders:", error.message);
  } finally {
    client.release();
  }
}

cron.schedule("0 8 * * *", async () => {
  console.log("🔍 Daily reminder check started...");
  await checkReminders();
});

checkReminders();
