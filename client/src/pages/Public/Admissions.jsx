import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calculator, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  PhoneCall, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  HelpCircle,
  Building
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import './Admissions.css';

export default function Admissions() {
  const { courses, addInquiry } = useData();
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || 'btech-cse';

  // Calculator State
  const [calcCourseId, setCalcCourseId] = useState(preselectedCourse);
  const [meritTier, setMeritTier] = useState('none');
  const [includeHostel, setIncludeHostel] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: preselectedCourse,
    qualification: '10+2 PCM (80%+)',
    city: '',
    notes: ''
  });

  const [submittedInquiry, setSubmittedInquiry] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Selected Course details for calculator
  const selectedCourseObj = courses.find(c => c.id === calcCourseId) || courses[0];
  const baseFee = selectedCourseObj ? selectedCourseObj.annualFee : 89500;

  // Calculate scholarship discount
  let scholarshipPercent = 0;
  if (meritTier === 'tier-90') scholarshipPercent = 0.25;
  else if (meritTier === 'tier-80') scholarshipPercent = 0.15;
  else if (meritTier === 'tier-70') scholarshipPercent = 0.10;

  const scholarshipAmount = Math.round(baseFee * scholarshipPercent);
  const hostelFee = includeHostel ? 55000 : 0;
  const transportFee = includeTransport ? 18000 : 0;
  const netEstimatedAnnual = baseFee - scholarshipAmount + hostelFee + transportFee;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const chosenCourseObj = courses.find(c => c.id === formData.course);
    const newLead = addInquiry({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      courseName: chosenCourseObj ? chosenCourseObj.title : 'General Engineering',
      qualification: formData.qualification,
      city: formData.city,
      notes: formData.notes
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedInquiry(newLead);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        course: calcCourseId,
        qualification: '10+2 PCM (80%+)',
        city: '',
        notes: ''
      });
    }, 600);
  };

  return (
    <div className="admissions-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><Sparkles size={14} /> Admissions Open 2026-27</span>
          <h1 className="page-header-title">Apply Online & Fee Estimator</h1>
          <p className="page-header-desc">
            Take the first step toward a transformative technical career. Calculate your customized 
            fee breakdown and submit your online application directly to the ITM Gorakhpur admission cell.
          </p>
          <div style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
            <a 
              href="#apply-online-form" 
              className="btn btn-sm" 
              style={{ background: '#ffb606', color: '#641320', fontWeight: '700', padding: '12px 24px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>✍ Proceed to Online Application Form</span>
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Apply Online</span>
          </div>
        </div>
      </section>

      {/* Step by Step Roadmap */}
      <section className="section admission-steps-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Simplified Enrollment</span>
            <h2 className="section-title">4-Step Admission Journey</h2>
          </div>

          <div className="steps-grid">
            <div className="card step-card">
              <span className="step-num">01</span>
              <h4>Choose Program & Check Eligibility</h4>
              <p>Review AKTU / BTEUP eligibility criteria for B.Tech, Pharmacy, MBA, or Polytechnic.</p>
            </div>

            <div className="card step-card">
              <span className="step-num">02</span>
              <h4>Submit Application / Enquiry</h4>
              <p>Fill the online form below or visit our GIDA campus counselling center in person.</p>
            </div>

            <div className="card step-card">
              <span className="step-num">03</span>
              <h4>Counselling & Document Verification</h4>
              <p>Verify your 10th, 12th, or graduation marksheets and JEE/CUET scorecard with our team.</p>
            </div>

            <div className="card step-card">
              <span className="step-num">04</span>
              <h4>Seat Allotment & Orientation</h4>
              <p>Confirm your seat, reserve hostel facilities, and receive your ITM admission kit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fee & Scholarship Estimator & Application Grid */}
      <section className="section bg-subtle-section">
        <div className="container grid-two-col">
          {/* Column 1: Interactive Fee Calculator */}
          <div className="card calculator-card">
            <div className="calc-header">
              <div className="calc-icon-badge">
                <Calculator size={24} />
              </div>
              <div>
                <h3>Interactive Fee & Scholarship Estimator</h3>
                <p>Estimate annual cost based on academic merit and campus amenities</p>
              </div>
            </div>

            <div className="calc-body">
              {/* Select Program */}
              <div className="form-group">
                <label className="form-label">Select Academic Program:</label>
                <select
                  value={calcCourseId}
                  onChange={(e) => setCalcCourseId(e.target.value)}
                  className="form-select"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} (₹{c.annualFee.toLocaleString('en-IN')}/yr)
                    </option>
                  ))}
                </select>
              </div>

              {/* Merit / Scholarship Tier */}
              <div className="form-group">
                <label className="form-label">Merit & Academic Scholarship Category:</label>
                <div className="radio-pills">
                  <button
                    type="button"
                    onClick={() => setMeritTier('none')}
                    className={`radio-pill ${meritTier === 'none' ? 'active' : ''}`}
                  >
                    Standard Merit
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeritTier('tier-70')}
                    className={`radio-pill ${meritTier === 'tier-70' ? 'active' : ''}`}
                  >
                    70% - 79% (10% Waiver)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeritTier('tier-80')}
                    className={`radio-pill ${meritTier === 'tier-80' ? 'active' : ''}`}
                  >
                    80% - 89% (15% Waiver)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeritTier('tier-90')}
                    className={`radio-pill ${meritTier === 'tier-90' ? 'active' : ''}`}
                  >
                    90%+ / JEE Top Tier (25% Waiver)
                  </button>
                </div>
              </div>

              {/* Optional Facilities */}
              <div className="form-group">
                <label className="form-label">Optional Campus Amenities:</label>
                <div className="checkbox-options">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={includeHostel}
                      onChange={(e) => setIncludeHostel(e.target.checked)}
                    />
                    <span>On-Campus Hostel with Mess & Wi-Fi (+ ₹55,000/yr)</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={includeTransport}
                      onChange={(e) => setIncludeTransport(e.target.checked)}
                    />
                    <span>AC College Bus Transport across Gorakhpur (+ ₹18,000/yr)</span>
                  </label>
                </div>
              </div>

              {/* Calculated Breakdown Box */}
              <div className="calc-breakdown-box">
                <div className="breakdown-row">
                  <span>Standard Annual Tuition:</span>
                  <span>₹{baseFee.toLocaleString('en-IN')}</span>
                </div>

                {scholarshipAmount > 0 && (
                  <div className="breakdown-row text-discount">
                    <span>Merit Scholarship Discount ({(scholarshipPercent * 100)}%):</span>
                    <span>- ₹{scholarshipAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                {includeHostel && (
                  <div className="breakdown-row">
                    <span>Hostel & Dining (Annual):</span>
                    <span>+ ₹55,000</span>
                  </div>
                )}

                {includeTransport && (
                  <div className="breakdown-row">
                    <span>Bus Transportation:</span>
                    <span>+ ₹18,000</span>
                  </div>
                )}

                <div className="breakdown-divider"></div>

                <div className="breakdown-total">
                  <span>Estimated Total Annual:</span>
                  <span className="total-amount">₹{netEstimatedAnnual.toLocaleString('en-IN')}<small>/yr</small></span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Application / Enquiry Form */}
          <div className="card application-form-card" id="apply-online-form">
            {submittedInquiry ? (
              <div className="submission-success-view">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} />
                </div>
                <h3>Application Submitted Successfully!</h3>
                <p>Thank you, <strong>{submittedInquiry.fullName}</strong>. Your application for <strong>{submittedInquiry.courseName}</strong> has been registered with our admission registry.</p>

                <div className="ticket-badge-box">
                  <span className="ticket-label">Application Reference ID:</span>
                  <span className="ticket-id">{submittedInquiry.id}</span>
                </div>

                <p className="counsellor-note">
                  An academic counsellor will reach out to you within 24 hours at <strong>{submittedInquiry.phone}</strong>.
                </p>

                <button
                  onClick={() => setSubmittedInquiry(null)}
                  className="btn btn-outline"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                <div className="form-card-header">
                  <span className="badge badge-rose" style={{ marginBottom: '0.6rem', fontWeight: 700, fontSize: '11px' }}>
                    ⚡ ONLINE REGISTRATION 2026-27 OPEN
                  </span>
                  <h3>Apply Online: Admission & Counselling Form</h3>
                  <p>Complete this form to apply directly for B.Tech, Pharmacy, MBA, or Polytechnic at ITM Gorakhpur</p>
                </div>

                <form onSubmit={handleFormSubmit} className="actual-form">
                  <div className="form-group">
                    <label className="form-label">Applicant Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rohit Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp *</label>
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

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Applying For Course *</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="form-select"
                      >
                        {courses.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">City / Domicile State *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Gorakhpur, UP"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Qualifying Exam & Score / Percentage</label>
                    <input
                      type="text"
                      placeholder="e.g., 12th PCM 84% or JEE Main 88 Percentile"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Questions or Comments (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Ask about scholarships, hostel availability, or curriculum..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-accent btn-lg"
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? 'Registering Application...' : 'Submit Application Now'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Direct Contact & Campus Visit Callout */}
      <section className="section">
        <div className="container admission-helpline-box glass-panel">
          <div className="helpline-left">
            <GraduationCap size={40} className="help-icon" />
            <div>
              <h3>Need In-Person Counselling?</h3>
              <p>Visit our campus counselling desk in GIDA, Gorakhpur. Open Monday to Saturday 9:00 AM - 5:00 PM.</p>
            </div>
          </div>
          <div className="helpline-right">
            <a href="tel:+919415210052" className="btn btn-primary">
              <PhoneCall size={16} /> Call: +91 94152 10052
            </a>
            <a href="mailto:admission@itmgkp.edu.in" className="btn btn-outline">
              <Mail size={16} /> admission@itmgkp.edu.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
