import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  MessageSquare, 
  FileText, 
  PhoneCall, 
  UserCheck,
  Send,
  HelpCircle
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import './Grievance.css';

export default function Grievance() {
  const { grievances, addGrievance } = useData();

  // Search / Tracking state
  const [trackTicketId, setTrackTicketId] = useState('');
  const [trackedResult, setTrackedResult] = useState(null);
  const [trackSearched, setTrackSearched] = useState(false);

  // Submission Form state
  const [formData, setFormData] = useState({
    studentName: '',
    rollNo: '',
    department: 'Computer Science',
    category: 'Academic & Lab Support',
    subject: '',
    description: ''
  });

  const [newlyCreatedTicket, setNewlyCreatedTicket] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    setTrackSearched(true);
    const found = grievances.find(
      (g) => g.id.toLowerCase().trim() === trackTicketId.toLowerCase().trim()
    );
    setTrackedResult(found || null);
  };

  const handleGrievanceSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ticket = addGrievance(formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setNewlyCreatedTicket(ticket);
      setFormData({
        studentName: '',
        rollNo: '',
        department: 'Computer Science',
        category: 'Academic & Lab Support',
        subject: '',
        description: ''
      });
    }, 600);
  };

  return (
    <div className="grievance-page">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><ShieldAlert size={14} /> AICTE & AKTU Mandate</span>
          <h1 className="page-header-title">Student Grievance Redressal (GRS)</h1>
          <p className="page-header-desc">
            An impartial, confidential, and time-bound online grievance resolution system ensuring a safe, 
            fair, and transparent academic environment for every student.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Grievance Redressal</span>
          </div>
        </div>
      </section>

      {/* Statutory Commitments & Anti-Ragging Hotline */}
      <section className="section statutory-section">
        <div className="container">
          <div className="statutory-grid">
            <div className="card stat-box">
              <ShieldAlert size={28} className="stat-icon rose" />
              <h4>Zero-Tolerance Anti-Ragging Cell</h4>
              <p>24x7 monitoring across campus and hostels. Strict disciplinary actions under UGC / Supreme Court regulations.</p>
              <div className="hotline-badge">
                <PhoneCall size={14} /> National Helpline: 1800-180-5522 (Toll Free)
              </div>
            </div>

            <div className="card stat-box">
              <UserCheck size={28} className="stat-icon cyan" />
              <h4>Internal Complaints Committee (ICC)</h4>
              <p>Dedicated committee ensuring gender equity, prevention of sexual harassment, and safe campus participation.</p>
              <div className="hotline-badge">
                <PhoneCall size={14} /> Campus ICC Cell: +91 94152 10052
              </div>
            </div>

            <div className="card stat-box">
              <Clock size={28} className="stat-icon emerald" />
              <h4>72-Hour Resolution Timeframe</h4>
              <p>All registered grievances are acknowledged immediately and reviewed by department heads within 3 working days.</p>
              <div className="hotline-badge">
                <span>Official Tracking: Real-Time ERP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Tracking & Submit Tabs */}
      <section className="section bg-subtle-section">
        <div className="container">
          <div className="grid-two-col">
            {/* Column 1: Track Existing Grievance */}
            <div className="card grievance-tracker-card">
              <div className="tracker-card-header">
                <Search size={22} className="tracker-icon" />
                <div>
                  <h3>Track Ticket Status</h3>
                  <p>Enter your GRS Ticket ID to inspect live progress and administration remarks</p>
                </div>
              </div>

              <form onSubmit={handleTrackSubmit} className="track-form">
                <div className="track-input-group">
                  <input
                    type="text"
                    required
                    placeholder="e.g., GRS-2026-089 or GRS-2026-092"
                    value={trackTicketId}
                    onChange={(e) => setTrackTicketId(e.target.value)}
                    className="track-input"
                  />
                  <button type="submit" className="btn btn-primary">
                    Track Status
                  </button>
                </div>
                <span className="demo-hint">
                  Try demo tickets: <strong>GRS-2026-089</strong> (Resolved) or <strong>GRS-2026-092</strong> (In Review)
                </span>
              </form>

              {/* Tracking Result Display */}
              {trackSearched && (
                <div className="track-result-container">
                  {trackedResult ? (
                    <div className="ticket-result-box">
                      <div className="ticket-result-header">
                        <span className="ticket-ref">{trackedResult.id}</span>
                        <span
                          className={`badge ${
                            trackedResult.status === 'Resolved'
                              ? 'badge-success'
                              : trackedResult.status === 'In Review'
                              ? 'badge-accent'
                              : 'badge-rose'
                          }`}
                        >
                          {trackedResult.status}
                        </span>
                      </div>

                      <h4 className="ticket-subject">{trackedResult.subject}</h4>
                      
                      <div className="ticket-meta-grid">
                        <div>
                          <span className="meta-lbl">Student:</span>
                          <span className="meta-val">{trackedResult.studentName} ({trackedResult.rollNo})</span>
                        </div>
                        <div>
                          <span className="meta-lbl">Department:</span>
                          <span className="meta-val">{trackedResult.department}</span>
                        </div>
                        <div>
                          <span className="meta-lbl">Category:</span>
                          <span className="meta-val">{trackedResult.category}</span>
                        </div>
                        <div>
                          <span className="meta-lbl">Date Filed:</span>
                          <span className="meta-val">{trackedResult.date}</span>
                        </div>
                      </div>

                      <div className="ticket-desc-box">
                        <strong>Student Description:</strong>
                        <p>{trackedResult.description}</p>
                      </div>

                      {trackedResult.response && (
                        <div className="ticket-response-box">
                          <div className="response-header">
                            <CheckCircle2 size={16} className="text-emerald" />
                            <strong>Redressal Committee Remarks:</strong>
                          </div>
                          <p>{trackedResult.response}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="ticket-not-found">
                      <AlertTriangle size={32} className="text-rose" />
                      <h4>No Ticket Found</h4>
                      <p>No active grievance found matching "{trackTicketId}". Please check the ID or submit a fresh request.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Column 2: Submit New Grievance */}
            <div className="card grievance-submit-card">
              {newlyCreatedTicket ? (
                <div className="ticket-created-success">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3>Grievance Lodged Successfully</h3>
                  <p>Your concern has been submitted to the ITM Grievance Redressal Committee.</p>

                  <div className="ticket-badge-box">
                    <span className="ticket-label">Your Unique Tracking ID:</span>
                    <span className="ticket-id">{newlyCreatedTicket.id}</span>
                  </div>

                  <p className="tracker-tip">
                    Please save this tracking ID. You can enter it in the tracker panel anytime to inspect updates.
                  </p>

                  <button
                    onClick={() => setNewlyCreatedTicket(null)}
                    className="btn btn-outline"
                  >
                    Submit Another Grievance
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-card-header">
                    <h3>Lodge a New Grievance</h3>
                    <p>All student submissions remain strictly confidential</p>
                  </div>

                  <form onSubmit={handleGrievanceSubmit} className="actual-form">
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Student Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">University Roll / Enrolment No *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., 220120010045"
                          value={formData.rollNo}
                          onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Academic Department *</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="form-select"
                        >
                          <option value="Computer Science">Computer Science & AI</option>
                          <option value="Pharmacy">Pharmaceutical Sciences</option>
                          <option value="Mechanical Engineering">Mechanical Engineering</option>
                          <option value="Civil Engineering">Civil Engineering</option>
                          <option value="Management Studies">MBA & BBA</option>
                          <option value="Computer Applications">BCA & MCA</option>
                          <option value="Polytechnic Diploma">Polytechnic Diploma</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Grievance Nature / Category *</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="form-select"
                        >
                          <option value="Academic & Lab Support">Academic & Lab Support</option>
                          <option value="Central Library">Central Library</option>
                          <option value="Examination & Results">Examination & Results</option>
                          <option value="Hostel & Dining Facilities">Hostel & Dining Facilities</option>
                          <option value="Transport & Bus Service">Transport & Bus Service</option>
                          <option value="Fees & Accounts">Fees & Accounts</option>
                          <option value="General Campus Amenity">General Campus Amenity</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject / Issue Summary *</label>
                      <input
                        type="text"
                        required
                        placeholder="Concise summary of the grievance"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Detailed Explanation *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Provide full context, dates, and relevant details..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="form-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%' }}
                    >
                      <Send size={16} />
                      {isSubmitting ? 'Registering Grievance...' : 'Submit Grievance to Committee'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
