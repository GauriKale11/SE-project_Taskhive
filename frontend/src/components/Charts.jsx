import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Charts() {
  const tasks = [
    { title: 'Task 1', priority: 'high', subject_id: 'Math', is_completed: true,  created_at: '2025-01-15' },
    { title: 'Task 2', priority: 'medium', subject_id: 'Science', is_completed: false, created_at: '2025-02-10' },
    { title: 'Task 3', priority: 'low', subject_id: 'History', is_completed: true,  created_at: '2025-02-25' },
    { title: 'Task 4', priority: 'high', subject_id: 'Math', is_completed: true,  created_at: '2025-03-01' },
    { title: 'Task 5', priority: 'low', subject_id: 'Science', is_completed: false, created_at: '2025-03-18' },
    { title: 'Task 6', priority: 'medium', subject_id: 'English', is_completed: true,  created_at: '2025-04-02' },
    { title: 'Task 7', priority: 'high', subject_id: 'History', is_completed: false, created_at: '2025-04-12' },
    { title: 'Task 8', priority: 'medium', subject_id: 'Math', is_completed: true,  created_at: '2025-05-09' },
    { title: 'Task 9', priority: 'high', subject_id: 'Science', is_completed: true,  created_at: '2025-06-15' },
    { title: 'Task 10', priority: 'low', subject_id: 'English', is_completed: false, created_at: '2025-06-29' },
  ];

  // Completed vs Pending
  const completed = tasks.filter(t => t.is_completed).length;
  const pending = tasks.length - completed;
  const statusData = [
    { label: 'Completed', value: completed, color: '#8ee791ff' },
    { label: 'Pending', value: pending, color: '#f18c84ff' },
  ];

  // Priority Distribution
  const priorityCounts = tasks.reduce((acc, t) => {
    acc[t.priority] = (acc[t.priority] || 0) + 1;
    return acc;
  }, {});
  const priorityData = Object.entries(priorityCounts).map(([p, c]) => ({
    label: p.charAt(0).toUpperCase() + p.slice(1),
    value: c,
    color: p === 'high' ? '#f18c84ff' : p === 'medium' ? '#f0cc97ff' : '#8ee791ff',
  }));

  // Subject-wise Tasks
  const subjectCounts = tasks.reduce((acc, t) => {
    acc[t.subject_id] = (acc[t.subject_id] || 0) + 1;
    return acc;
  }, {});
  const subjectData = Object.entries(subjectCounts).map(([s, c], i) => ({
    label: s,
    value: c,
    color: ['#9fc5e4ff', '#ee88a3ff', '#03a9f4', '#c7f395ff', '#f5df9cff'][i % 5],
  }));

  // Reusable Legend Component
  const Legend = ({ data }) => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '10px', flexWrap: 'wrap' }}>
      {data.map(item => (
        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: 12, height: 12, backgroundColor: item.color, display: 'inline-block', borderRadius: '50%' }}></span>
          <span style={{ fontSize: '0.9rem', color: '#333' }}>{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '2rem', display: "flex", justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
        
        {/* Chart 1: Completed vs Pending */}
        <div style={{ textAlign: 'center' }}>
          <h3>Completion Status</h3>
          <PieChart
            series={[{ data: statusData, innerRadius: 40, outerRadius: 80 }]}
            width={180}
            height={180}
            chart={{ legend: { visible: false } }}
          />
          <Legend data={statusData} />
        </div>

        {/* Chart 2: Priority */}
        <div style={{ textAlign: 'center' }}>
          <h3>Tasks by Priority</h3>
          <PieChart
            series={[{ data: priorityData, innerRadius: 40, outerRadius: 80 }]}
            width={200}
            height={200}
            chart={{ legend: { visible: false } }}
          />
          <Legend data={priorityData} />
        </div>

        {/* Chart 3: Subject-wise */}
        <div style={{ textAlign: 'center' }}>
          <h3>Subject-wise Distribution</h3>
          <PieChart
            series={[{ data: subjectData, innerRadius: 40, outerRadius: 80 }]}
            width={200}
            height={200}
            chart={{ legend: { visible: false } }}
          />
          <Legend data={subjectData} />
        </div>

      </div>
    </div>
  );
}
