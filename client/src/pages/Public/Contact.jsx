import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation,
  Building,
  UserCheck
} from 'lucide-react';
import { collegeInfo } from '../../utils/mockData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Admissions Office',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'Admissions Office',
        message: ''
      });
    }, 4000);
  };

  const departments = [
    { name: "Admission Helpline", phone: "+91 94152 10052", email: "admission@itmgkp.edu.in", timing: "9 AM - 5 PM (Mon - Sat)" },
    { name: "Registrar Office", phone: "0551-2580532", email: "registrar@itmgkp.edu.in", timing: "9 AM - 4:30 PM" },
    { name: "Training & Placement Cell", phone: "+91 94152 10053", email: "placement@itmgkp.edu.in", timing: "9 AM - 5 PM" },
    { name: "Examination Control Office", phone: "0551-2580533", email: "exam@itmgkp.edu.in", timing: "10 AM - 4 PM" },
    { name: "Hostel & Residential Office", phone: "+91 94152 10054", email: "hostel@itmgkp.edu.in", timing: "24x7 Warden On Duty" },
    { name: "Student Grievance Cell", phone: "+91 94152 10055", email: "grievance@itmgkp.edu.in", timing: "10 AM - 5 PM" }
  ];

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><MapPin size={14} /> GIDA, Gorakhpur</span>
          <h1 className="page-header-title">Contact & Campus Visit</h1>
          <p className="page-header-desc">
            We welcome future students, parents, alumni, and corporate partners to connect with our administrative and academic officers.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section">
        <div className="container grid-two-col">
          {/* Column 1: Campus Address & Location Map */}
          <div className="card campus-location-card">
            <div className="location-header">
              <Building size={24} className="text-accent" />
              <div>
                <h3>Main Campus Location</h3>
                <p>Located in the heart of Gorakhpur Industrial Development Authority (GIDA)</p>
              </div>
            </div>

            <div className="address-meta-box">
              <div className="contact-item">
                <MapPin size={20} className="text-secondary" />
                <div>
                  <strong>Campus Address:</strong>
                  <p>{collegeInfo.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <Navigation size={20} className="text-secondary" />
                <div>
                  <strong>Connectivity:</strong>
                  <p>12 km from Gorakhpur Junction Railway Station | 18 km from Mahayogi Gorakhnath Airport (GOP)</p>
                </div>
              </div>

              <div className="contact-item">
                <Clock size={20} className="text-secondary" />
                <div>
                  <strong>Administrative Working Hours:</strong>
                  <p>Monday - Saturday: 9:00 AM to 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Simulated Google Map card */}
            <div className="map-preview-box">
              <div className="map-overlay-info">
                <h4>ITM Gorakhpur Campus</h4>
                <p>Sector-7, GIDA, Gorakhpur, UP</p>
                <a
                  href="https://maps.google.com/?q=ITM+Gorakhpur+GIDA"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <Navigation size={13} /> Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Send Message Form */}
          <div className="card message-form-card">
            <div className="form-card-header">
              <h3>Send Us an Inquiry</h3>
              <p>Our administrative desk will reply to your query via email or phone.</p>
            </div>

            {submitted ? (
              <div className="message-success-box">
                <CheckCircle2 size={44} className="text-emerald" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. An ITM representative will respond to your query shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-form">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="form-select"
                  >
                    <option value="Admissions Office">Admissions Office</option>
                    <option value="Training & Placement">Training & Placement (T&P)</option>
                    <option value="Registrar & Verification">Registrar & Verification</option>
                    <option value="Hostel Accommodation">Hostel Accommodation</option>
                    <option value="Accounts & Fees">Accounts & Fees</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Inquiry *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Department Directory Grid */}
      <section className="section bg-subtle-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Lines</span>
            <h2 className="section-title">Department Contacts Directory</h2>
            <p className="section-desc">
              Connect directly with designated department heads, examination controller, or student welfare officers.
            </p>
          </div>

          <div className="dept-grid">
            {departments.map((dept, i) => (
              <div key={i} className="card dept-card">
                <h4 className="dept-title">{dept.name}</h4>
                <div className="dept-row">
                  <Phone size={15} className="dept-icon" />
                  <a href={`tel:${dept.phone}`}>{dept.phone}</a>
                </div>
                <div className="dept-row">
                  <Mail size={15} className="dept-icon" />
                  <a href={`mailto:${dept.email}`}>{dept.email}</a>
                </div>
                <div className="dept-row">
                  <Clock size={15} className="dept-icon" />
                  <span>{dept.timing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
