const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const noticeRoutes = require('./routes/noticeRoutes');
const admissionRoutes = require('./routes/admissionRoutes');
const grievanceRoutes = require('./routes/grievanceRoutes');

app.use('/api/notices', noticeRoutes);
app.use('/api/admissions', admissionRoutes);
app.use('/api/grievances', grievanceRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    institution: 'Institute of Technology and Management (ITM Gorakhpur)',
    aktuCode: 120,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`ITM Gorakhpur Backend API server listening on http://localhost:${PORT}`);
});
