const express = require('express');
const router = express.Router();

let notices = [
  {
    id: "not-01",
    title: "AKTU Even Semester Examination Schedule 2026-27 Released",
    category: "Examination",
    date: "2026-10-05",
    isUrgent: true,
    summary: "Students can view the finalized exam center datesheet for B.Tech, MBA, and MCA on the AKTU ERP portal."
  },
  {
    id: "not-02",
    title: "Campus Placement Drive: TCS & Infosys Scheduled for Final Year",
    category: "Placement",
    date: "2026-10-02",
    isUrgent: true,
    summary: "Eligible B.Tech (CSE, ECE) and MCA students must register with the Training & Placement Cell by October 12."
  },
  {
    id: "not-03",
    title: "National Conference on AI, Robotics & Sustainable Green Engineering",
    category: "Academic",
    date: "2026-09-28",
    isUrgent: false,
    summary: "Call for papers and registrations open for the 2-day technical symposium scheduled in November."
  }
];

// GET all notices
router.get('/', (req, res) => {
  res.json({ success: true, count: notices.length, data: notices });
});

// POST new notice
router.post('/', (req, res) => {
  const { title, category, summary, isUrgent } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Notice title is required' });
  }

  const newNotice = {
    id: `not-${Date.now()}`,
    title,
    category: category || 'Academic',
    summary: summary || '',
    isUrgent: !!isUrgent,
    date: new Date().toISOString().split('T')[0]
  };

  notices.unshift(newNotice);
  res.status(201).json({ success: true, data: newNotice });
});

// DELETE notice by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  notices = notices.filter(n => n.id !== id);
  res.json({ success: true, message: `Notice ${id} deleted successfully` });
});

module.exports = router;
