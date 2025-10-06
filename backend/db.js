const { Pool } = require('pg');

const pool = new Pool({
  host: "aws-1-ap-south-1.pooler.supabase.com",
  port: 5432,
  database: "postgres",
  user: "postgres.zukgwksdvyspqavigucj",
  password: "@Azerty23", 
  ssl: { rejectUnauthorized: false }  
});

module.exports = pool;
