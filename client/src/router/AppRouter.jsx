import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ScrollToTop from '../components/ScrollToTop';

// Public Pages
import Home from '../pages/Public/Home';
import Academics from '../pages/Public/Academics';
import Admissions from '../pages/Public/Admissions';
import Placements from '../pages/Public/Placements';
import CampusLife from '../pages/Public/CampusLife';
import Notices from '../pages/Public/Notices';
import Grievance from '../pages/Public/Grievance';
import About from '../pages/Public/About';
import Contact from '../pages/Public/Contact';
import Login from '../pages/Public/Login';
import Payment from '../pages/Public/Payment';
import Feedback from '../pages/Public/Feedback';
import InnovationCell from '../pages/Public/InnovationCell';
import Governance from '../pages/Public/Governance';

// Portals
import AdminDashboard from '../pages/Admin/Dashboard';
import StudentDashboard from '../pages/Student/Dashboard';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="placements" element={<Placements />} />
          <Route path="campus-life" element={<CampusLife />} />
          <Route path="notices" element={<Notices />} />
          <Route path="grievance" element={<Grievance />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="payment" element={<Payment />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="innovation-cell" element={<InnovationCell />} />
          <Route path="aicte-approvals" element={<Governance initialTab="aicte" />} />
          <Route path="mandatory-disclosure" element={<Governance initialTab="disclosure" />} />
          <Route path="bog" element={<Governance initialTab="bog" />} />
          <Route path="audit-report" element={<Governance initialTab="audit" />} />
          <Route path="service-book" element={<Governance initialTab="service-book" />} />
          <Route path="governance" element={<Governance />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="student" element={<StudentDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
