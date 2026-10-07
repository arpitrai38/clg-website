const express = require('express');
const router = express.Router();

let grievances = [
  {
    id: 'GRS-2026-089',
    studentName: 'Rahul Tiwari',
    rollNo: '220120010045',
    department: 'Computer Science',
    category: 'Academic & Lab Support',
    subject: 'Additional GPU lab access hours for AI Capstone projects',
    description: 'Final year CSE-AI students need extended evening hours in the GPU computing center for project training.',
    status: 'Resolved',
    date: '2026-09-28',
    response: 'Lab timings have been extended till 8:00 PM with lab technician on duty.'
  },
  {
    id: 'GRS-2026-092',
    studentName: 'Ananya Gupta',
    rollNo: '230120020018',
    department: 'Pharmacy',
    category: 'Central Library',
    subject: 'Request for recent edition pharmacology reference journals',
    description: 'Need access to latest 2026 editions of Indian Pharmacopoeia volumes in the reading hall.',
    status: 'In Review',
    date: '2026-10-04',
    response: 'Librarian has placed the order with distributor, expected arrival this week.'
  }
];

// GET all grievances
router.get('/', (req, res) => {
  res.json({ success: true, count: grievances.length, data: grievances });
});

// GET grievance by ID (Live Tracker)
router.get('/track/:id', (req, res) => {
  const { id } = req.params;
  const found = grievances.find(g => g.id.toLowerCase() === id.toLowerCase());
  if (!found) {
    return res.status(404).json({ success: false, message: 'Ticket not found' });
  }
  res.json({ success: true, data: found });
});

// POST new grievance
router.post('/', (req, res) => {
  const { studentName, rollNo, department, category, subject, description } = req.body;
  if (!studentName || !rollNo || !subject) {
    return res.status(400).json({ success: false, message: 'Name, roll number, and subject are required' });
  }

  const newGrievance = {
    id: `GRS-2026-${Math.floor(100 + Math.random() * 900)}`,
    studentName,
    rollNo,
    department: department || 'General',
    category: category || 'General Campus Amenity',
    subject,
    description: description || '',
    status: 'Pending',
    date: new Date().toISOString().split('T')[0],
    response: 'Your grievance has been acknowledged and routed to the department redressal committee.'
  };

  grievances.unshift(newGrievance);
  res.status(201).json({ success: true, data: newGrievance });
});

// PUT update resolution status
router.put('/:id/resolve', (req, res) => {
  const { id } = req.params;
  const { status, response } = req.body;
  const grievance = grievances.find(g => g.id === id);

  if (!grievance) {
    return res.status(404).json({ success: false, message: 'Grievance ticket not found' });
  }

  if (status) grievance.status = status;
  if (response) grievance.response = response;

  res.json({ success: true, data: grievance });
});

module.exports = router;
