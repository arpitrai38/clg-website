const express = require('express');
const router = express.Router();

let inquiries = [
  {
    id: "INQ-1001",
    fullName: "Aryan Verma",
    email: "aryan.verma@example.com",
    phone: "+91 9876543210",
    course: "btech-cse",
    courseName: "B.Tech - Computer Science & Engineering",
    qualification: "10+2 PCM (86%)",
    status: "Verified",
    date: "2026-10-06"
  },
  {
    id: "INQ-1002",
    fullName: "Simran Singh",
    email: "simran.s@example.com",
    phone: "+91 9832104567",
    course: "mba",
    courseName: "Master of Business Administration (MBA)",
    qualification: "B.Com (74%)",
    status: "Pending",
    date: "2026-10-05"
  }
];

// GET all inquiries
router.get('/', (req, res) => {
  res.json({ success: true, count: inquiries.length, data: inquiries });
});

// POST new inquiry / application
router.post('/', (req, res) => {
  const { fullName, email, phone, course, courseName, qualification, city, notes } = req.body;
  if (!fullName || !phone) {
    return res.status(400).json({ success: false, message: 'Name and phone are required' });
  }

  const newInquiry = {
    id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
    fullName,
    email: email || '',
    phone,
    course: course || 'General',
    courseName: courseName || 'General Program',
    qualification: qualification || '10+2',
    city: city || 'Gorakhpur',
    notes: notes || '',
    status: 'Pending',
    date: new Date().toISOString().split('T')[0]
  };

  inquiries.unshift(newInquiry);
  res.status(201).json({ success: true, data: newInquiry });
});

// PUT update inquiry status
router.put('/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const inquiry = inquiries.find(i => i.id === id);

  if (!inquiry) {
    return res.status(404).json({ success: false, message: 'Application not found' });
  }

  inquiry.status = status;
  res.json({ success: true, data: inquiry });
});

module.exports = router;
