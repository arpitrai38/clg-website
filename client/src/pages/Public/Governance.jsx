import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Building2, 
  Download, 
  Calendar, 
  CheckCircle2, 
  Users, 
  ExternalLink, 
  Search, 
  BookOpen, 
  Lock,
  Award,
  Layers,
  ArrowRight,
  TrendingUp,
  Landmark,
  UserCheck
} from 'lucide-react';
import './Governance.css';

export default function Governance({ initialTab }) {
  const location = useLocation();

  const getActiveTabFromPath = () => {
    const path = location.pathname;
    if (path.includes('aicte-approvals') || path.includes('aicte')) return 'aicte';
    if (path.includes('mandatory-disclosure')) return 'disclosure';
    if (path.includes('service-book')) return 'service-book';
    if (path.includes('audit-report') || path.includes('audit')) return 'audit';
    if (path.includes('bog')) return 'bog';
    return initialTab || 'aicte';
  };

  const [activeTab, setActiveTab] = useState(getActiveTabFromPath());
  const [empSearch, setEmpSearch] = useState('');
  const [searchedEmp, setSearchedEmp] = useState(null);

  useEffect(() => {
    setActiveTab(getActiveTabFromPath());
  }, [location.pathname]);

  // Tab 1: AICTE Approvals Data
  const aicteLetters = [
    { year: '2026 - 2027', refNo: 'F.No. Northern/1-20512871/2026/EOA', title: 'AICTE Extension of Approval (EOA) 2026-27', date: '15 March 2026', type: 'AICTE New Delhi', size: '1.8 MB' },
    { year: '2025 - 2026', refNo: 'F.No. Northern/1-14029381/2025/EOA', title: 'AICTE Extension of Approval (EOA) 2025-26', date: '28 April 2025', type: 'AICTE New Delhi', size: '2.1 MB' },
    { year: '2024 - 2025', refNo: 'F.No. Northern/1-93104821/2024/EOA', title: 'AICTE Extension of Approval (EOA) 2024-25', date: '12 May 2024', type: 'AICTE New Delhi', size: '1.9 MB' },
    { year: '2023 - 2024', refNo: 'F.No. Northern/1-78291042/2023/EOA', title: 'AICTE Extension of Approval (EOA) 2023-24', date: '24 May 2023', type: 'AICTE New Delhi', size: '2.3 MB' },
    { year: 'Pharmacy PCI', refNo: 'PCI-120/Northern/2025-26/B.Pharm', title: 'PCI Approval Letter for B.Pharm & D.Pharm', date: '18 June 2025', type: 'Pharmacy Council of India', size: '1.4 MB' },
    { year: 'AKTU Affiliation', refNo: 'AKTU/Affil/2025-26/Code-120', title: 'AKTU Annual Permanent Affiliation Letter', date: '04 July 2025', type: 'AKTU Lucknow', size: '1.2 MB' },
    { year: 'BTE Affiliation', refNo: 'BTEUP/Affil/Diploma/120/2025', title: 'Board of Technical Education (BTE) Approval', date: '22 July 2025', type: 'BTE Uttar Pradesh', size: '1.1 MB' }
  ];

  // Tab 2: Mandatory Disclosure Data
  const disclosureDetails = [
    { label: 'Name of Institution', value: 'Institute of Technology & Management (ITM)' },
    { label: 'Address & Campus', value: 'AL-1, Sector-7, GIDA, Gorakhpur - 273209, Uttar Pradesh' },
    { label: 'AICTE Permanent Institute ID', value: '1-20512871' },
    { label: 'AKTU College Code', value: '120' },
    { label: 'Name of Sponsoring Society', value: 'Shri Ramswaroop Memorial Trust / ITM Society Gorakhpur' },
    { label: 'Director / Principal', value: 'Dr. N. K. Singh (Ph.D, M.Tech - IIT Roorkee)' },
    { label: 'Affiliating University', value: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow (AKTU)' },
    { label: 'Total Campus Land Area', value: '10.5 Acres (Exceeds AICTE Norms)' },
    { label: 'Total Academic Built-up Area', value: '28,450 sq. meters' },
    { label: 'Central Library Holdings', value: '38,500+ Books, 140 National/International Journals, IEEE Digital Library' },
    { label: 'Computer Terminals & Bandwidth', value: '650+ High Performance Core i7 PCs, 1 Gbps Leased Line Optical Fiber' }
  ];

  const approvedIntake = [
    { program: 'B.Tech - Computer Science & Engineering', level: 'UG (4 Yrs)', intake: 180, affiliation: 'AKTU / AICTE' },
    { program: 'B.Tech - Artificial Intelligence & ML', level: 'UG (4 Yrs)', intake: 60, affiliation: 'AKTU / AICTE' },
    { program: 'B.Tech - Mechanical Engineering', level: 'UG (4 Yrs)', intake: 60, affiliation: 'AKTU / AICTE' },
    { program: 'B.Tech - Civil Engineering', level: 'UG (4 Yrs)', intake: 60, affiliation: 'AKTU / AICTE' },
    { program: 'Bachelor of Pharmacy (B.Pharm)', level: 'UG (4 Yrs)', intake: 100, affiliation: 'PCI / AKTU' },
    { program: 'Diploma in Pharmacy (D.Pharm)', level: 'Diploma (2 Yrs)', intake: 60, affiliation: 'PCI / BTE' },
    { program: 'Master of Business Administration (MBA)', level: 'PG (2 Yrs)', intake: 120, affiliation: 'AKTU / AICTE' },
    { program: 'Polytechnic Diploma Engineering', level: 'Diploma (3 Yrs)', intake: 120, affiliation: 'BTE / AICTE' }
  ];

  // Tab 3: BOG Members
  const bogMembers = [
    { name: 'Shri Neeraj Matanhelia', designation: 'Chairman', role: 'Philanthropist, Industrialist & Educationalist', category: 'Management Nominee' },
    { name: 'Dr. N. K. Singh', designation: 'Member Secretary & Director', role: 'Director, ITM Gorakhpur (Ph.D, M.Tech - IIT Roorkee)', category: 'Institutional Head', image: '/images/director.png' },
    { name: 'AICTE Nominee (Ex-Officio)', designation: 'Member', role: 'Regional Officer, Northern Regional Office (NRO), AICTE', category: 'AICTE Apex Nominee' },
    { name: 'State Govt. Nominee', designation: 'Member', role: 'Joint Director, Technical Education, Government of U.P.', category: 'State Government Nominee' },
    { name: 'AKTU University Nominee', designation: 'Member', role: 'Professor, Dr. A.P.J. Abdul Kalam Technical University', category: 'University Nominee' },
    { name: 'Prof. (Dr.) S. K. Srivastava', designation: 'Member (Academic Expert)', role: 'Former Professor & Dean, MMMUT Gorakhpur', category: 'Educationist' },
    { name: 'Shri Alok Agarwal', designation: 'Member (Industry Expert)', role: 'Managing Director, GIDA Industrial Association', category: 'Industrialist' },
    { name: 'Dr. Vinay Kumar Pathak', designation: 'Member', role: 'Dean Academics & Head of CSE Department', category: 'Faculty Representative' },
    { name: 'Dr. Priya Ranjan Roy', designation: 'Member', role: 'Director, ITM College of Pharmacy', category: 'Faculty Representative' }
  ];

  // Tab 4: Audit Reports
  const auditReports = [
    { year: 'Financial Year 2024-25', auditor: 'M/s Goel & Associates, Chartered Accountants', status: 'Audited & Certified', date: '30 September 2025', size: '3.4 MB' },
    { year: 'Financial Year 2023-24', auditor: 'M/s Goel & Associates, Chartered Accountants', status: 'Audited & Certified', date: '25 September 2024', size: '3.2 MB' },
    { year: 'Financial Year 2022-23', auditor: 'M/s K. K. Singhal & Co., Chartered Accountants', status: 'Audited & Certified', date: '28 September 2023', size: '2.8 MB' },
    { year: 'Financial Year 2021-22', auditor: 'M/s K. K. Singhal & Co., Chartered Accountants', status: 'Audited & Certified', date: '20 September 2022', size: '2.6 MB' },
    { year: 'Financial Year 2020-21', auditor: 'M/s K. K. Singhal & Co., Chartered Accountants', status: 'Audited & Certified', date: '22 September 2021', size: '2.4 MB' }
  ];

  // Tab 5: Service Book Lookup Mock
  const handleEmpSearch = (e) => {
    e.preventDefault();
    if (!empSearch.trim()) return;
    setSearchedEmp({
      empId: empSearch.toUpperCase(),
      name: 'Dr. Rajesh Sharma',
      designation: 'Associate Professor',
      department: 'Computer Science & Engineering',
      doj: '14 July 2017',
      nature: 'Permanent / Approved Faculty by AKTU',
      scale: 'AICTE 7th CPC (Level 13A)',
      leavesAvailable: '12 Casual Leaves, 24 Earned Leaves',
      pfNo: 'UP/GKP/0029104/109',
      status: 'Active & Verified'
    });
  };

  const downloadDummyPdf = (title) => {
    alert(`Downloading official certified document: ${title} (PDF)`);
  };

  return (
    <div className="governance-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><ShieldCheck size={14} /> Statutory Governance & Regulatory Compliances</span>
          <h1 className="page-header-title">
            {activeTab === 'aicte' && 'AICTE Approval Letters & Accreditations'}
            {activeTab === 'disclosure' && 'AICTE Mandatory Disclosure (APH 2026-27)'}
            {activeTab === 'service-book' && 'E-Service Book & Staff Portal'}
            {activeTab === 'audit' && 'Audited Financial Statements & Reports'}
            {activeTab === 'bog' && 'Board of Governors (BOG) & Governance Council'}
          </h1>
          <p className="page-header-desc">
            Official statutory regulatory documentation, approvals, audit reports, and institutional disclosures 
            as mandated by AICTE New Delhi, AKTU Lucknow, PCI, and the Ministry of Education.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Statutory & Governance</span>
            <span className="separator">/</span>
            <span className="active-trail-item">{activeTab.toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* Navigation Pills Bar */}
      <section className="gov-nav-bar-section">
        <div className="container">
          <div className="gov-tabs-container">
            <button 
              className={`gov-tab-link ${activeTab === 'aicte' ? 'active' : ''}`}
              onClick={() => setActiveTab('aicte')}
            >
              <FileText size={16} />
              <span>AICTE Approvals</span>
            </button>
            <button 
              className={`gov-tab-link ${activeTab === 'disclosure' ? 'active' : ''}`}
              onClick={() => setActiveTab('disclosure')}
            >
              <ShieldCheck size={16} />
              <span>Mandatory Disclosure</span>
            </button>
            <button 
              className={`gov-tab-link ${activeTab === 'bog' ? 'active' : ''}`}
              onClick={() => setActiveTab('bog')}
            >
              <Users size={16} />
              <span>Board of Governors (BOG)</span>
            </button>
            <button 
              className={`gov-tab-link ${activeTab === 'audit' ? 'active' : ''}`}
              onClick={() => setActiveTab('audit')}
            >
              <Landmark size={16} />
              <span>Audit Reports</span>
            </button>
            <button 
              className={`gov-tab-link ${activeTab === 'service-book' ? 'active' : ''}`}
              onClick={() => setActiveTab('service-book')}
            >
              <UserCheck size={16} />
              <span>Service Book Portal</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content Section */}
      <section className="section gov-content-section">
        <div className="container">

          {/* TAB 1: AICTE APPROVAL LETTERS */}
          {activeTab === 'aicte' && (
            <div className="gov-view-pane">
              <div className="pane-intro-card card">
                <div className="intro-badge-row">
                  <span className="cert-pill">AICTE Approved</span>
                  <span className="cert-pill">AKTU Code: 120</span>
                  <span className="cert-pill">PCI Approved</span>
                  <span className="cert-pill">BTE Code: 120</span>
                </div>
                <h3>All India Council for Technical Education (AICTE) Approvals</h3>
                <p>
                  Institute of Technology & Management (ITM), Gorakhpur operates under the continuous, unconditional 
                  Extension of Approval (EOA) sanctioned annually by AICTE, New Delhi, Ministry of Education, Govt. of India. 
                  Below are the official gazetted approval letters for public inspection.
                </p>
              </div>

              <div className="documents-cards-grid">
                {aicteLetters.map((doc, idx) => (
                  <div key={idx} className="card doc-card">
                    <div className="doc-top-bar">
                      <span className="doc-year-badge">{doc.year}</span>
                      <span className="doc-authority">{doc.type}</span>
                    </div>
                    <h4>{doc.title}</h4>
                    <p className="doc-ref">Ref No: <code>{doc.refNo}</code></p>
                    <div className="doc-meta-row">
                      <span><Calendar size={14} /> Approved: {doc.date}</span>
                      <span>{doc.size}</span>
                    </div>
                    <button 
                      onClick={() => downloadDummyPdf(doc.title)} 
                      className="btn ss-btn doc-download-btn"
                    >
                      <Download size={15} />
                      <span>Download Certified Copy (PDF)</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: MANDATORY DISCLOSURE */}
          {activeTab === 'disclosure' && (
            <div className="gov-view-pane">
              <div className="disclosure-top-action card">
                <div className="disclosure-cta-info">
                  <h3>AICTE Statutory Mandatory Disclosure (2026-27)</h3>
                  <p>
                    Published in accordance with clause 10(1) of AICTE Approval Process Handbook (APH) regulations. 
                    Includes comprehensive data regarding governance, physical infrastructure, fee structures, faculty profiles, and laboratory inventory.
                  </p>
                </div>
                <button 
                  onClick={() => downloadDummyPdf('Official AICTE Mandatory Disclosure 2026-27 Book')} 
                  className="btn ss-btn btn-lg"
                >
                  <Download size={16} />
                  <span>Download Full Mandatory Disclosure (PDF)</span>
                </button>
              </div>

              <div className="card disclosure-data-table-card">
                <h4 className="table-header-title">1. Institutional Particulars & Approvals</h4>
                <div className="disclosure-grid-table">
                  {disclosureDetails.map((item, idx) => (
                    <div key={idx} className="d-row">
                      <div className="d-label">{item.label}</div>
                      <div className="d-val">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card disclosure-data-table-card">
                <h4 className="table-header-title">2. Sanctioned Programs & Approved Seat Matrix</h4>
                <div className="table-responsive">
                  <table className="gov-data-table">
                    <thead>
                      <tr>
                        <th>Academic Program / Course</th>
                        <th>Level & Duration</th>
                        <th>Sanctioned Intake</th>
                        <th>Affiliating Body</th>
                        <th>Approval Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvedIntake.map((row, idx) => (
                        <tr key={idx}>
                          <td><strong>{row.program}</strong></td>
                          <td>{row.level}</td>
                          <td><span className="intake-badge">{row.intake} Seats</span></td>
                          <td>{row.affiliation}</td>
                          <td><span className="status-approved"><CheckCircle2 size={14} /> Approved</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card statutory-comm-card">
                <h4 className="table-header-title">3. Statutory Committees & Grievance Mechanism</h4>
                <div className="comm-pills-grid">
                  <div className="comm-pill-box">
                    <strong>Anti-Ragging Committee & Squad</strong>
                    <p>Head: Dr. N.K. Singh | Helpline: 1800-180-5522</p>
                  </div>
                  <div className="comm-pill-box">
                    <strong>Internal Complaints Committee (ICC)</strong>
                    <p>Prevention of Sexual Harassment at Workplace (POSH Act)</p>
                  </div>
                  <div className="comm-pill-box">
                    <strong>SC / ST / OBC Redressal Cell</strong>
                    <p>Welfare & reservation compliances monitor</p>
                  </div>
                  <div className="comm-pill-box">
                    <strong>Student Grievance Redressal Committee (SGRC)</strong>
                    <p>Online ticket redressal with ombudsperson portal</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BOARD OF GOVERNORS (BOG) */}
          {activeTab === 'bog' && (
            <div className="gov-view-pane">
              <div className="pane-intro-card card">
                <h3>Governing Body / Board of Governors (BOG)</h3>
                <p>
                  The Board of Governors is the apex statutory governing body of ITM Gorakhpur, constituted strictly 
                  in compliance with AICTE and AKTU university governance norms. The BOG provides strategic leadership, 
                  reviews academic directions, approves annual capital budgets, and safeguards educational standards.
                </p>
              </div>

              <div className="bog-members-grid">
                {bogMembers.map((m, idx) => (
                  <div key={idx} className="card bog-card">
                    {m.image && (
                      <div className="bog-avatar-frame">
                        <img src={m.image} alt={m.name} className="bog-avatar-img" />
                      </div>
                    )}
                    <div className="bog-role-pill">{m.designation}</div>
                    <h4 className="bog-name">{m.name}</h4>
                    <span className="bog-category">{m.category}</span>
                    <p className="bog-desc">{m.role}</p>
                  </div>
                ))}
              </div>

              <div className="card bog-minutes-card">
                <div className="minutes-header">
                  <h4>Proceedings & Minutes of BOG Meetings</h4>
                  <p>Resolutions approved during annual and bi-annual governing council meetings:</p>
                </div>
                <div className="minutes-list">
                  <div className="minute-item">
                    <span>• 42nd BOG Meeting Minutes (Held on Dec 14, 2025)</span>
                    <button onClick={() => downloadDummyPdf('42nd BOG Meeting Minutes')} className="btn btn-outline btn-sm">
                      <Download size={14} /> Download PDF
                    </button>
                  </div>
                  <div className="minute-item">
                    <span>• 41st BOG Meeting Minutes (Held on Jun 22, 2025)</span>
                    <button onClick={() => downloadDummyPdf('41st BOG Meeting Minutes')} className="btn btn-outline btn-sm">
                      <Download size={14} /> Download PDF
                    </button>
                  </div>
                  <div className="minute-item">
                    <span>• 40th BOG Meeting Minutes (Held on Dec 18, 2024)</span>
                    <button onClick={() => downloadDummyPdf('40th BOG Meeting Minutes')} className="btn btn-outline btn-sm">
                      <Download size={14} /> Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AUDIT REPORTS */}
          {activeTab === 'audit' && (
            <div className="gov-view-pane">
              <div className="pane-intro-card card">
                <h3>Certified Annual Audited Financial Reports</h3>
                <p>
                  In accordance with statutory higher education guidelines and transparency norms, 
                  ITM Gorakhpur maintains verified, audited financial statements inspected by independent Chartered Accountants.
                </p>
              </div>

              <div className="documents-cards-grid">
                {auditReports.map((item, idx) => (
                  <div key={idx} className="card doc-card">
                    <div className="doc-top-bar">
                      <span className="doc-year-badge">{item.year}</span>
                      <span className="doc-authority" style={{ color: '#166534', background: '#dcfce7' }}>{item.status}</span>
                    </div>
                    <h4>Independent Auditor's Report & Balance Sheet</h4>
                    <p className="doc-ref">Auditor: <strong>{item.auditor}</strong></p>
                    <div className="doc-meta-row">
                      <span><Calendar size={14} /> Certified: {item.date}</span>
                      <span>{item.size}</span>
                    </div>
                    <button 
                      onClick={() => downloadDummyPdf(item.year + ' Audited Financials')} 
                      className="btn ss-btn doc-download-btn"
                    >
                      <Download size={15} />
                      <span>Download Audited Statement (PDF)</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SERVICE BOOK */}
          {activeTab === 'service-book' && (
            <div className="gov-view-pane">
              <div className="service-book-intro-grid">
                <div className="card service-info-card">
                  <span className="section-tag"><BookOpen size={14} /> Statutory HR Records</span>
                  <h3>E-Service Book Management System</h3>
                  <p>
                    Under Uttar Pradesh Technical Education Service Rules & AICTE Cadre regulations, 
                    every faculty and staff member's career records, appointments, educational qualifications, 
                    CAS promotions, leaves, and increments are systematically maintained in the institutional E-Service Book registry.
                  </p>
                  <ul className="sb-bullets">
                    <li>• Verification of AICTE 7th CPC salary scale and grade pay.</li>
                    <li>• Permanent AKTU Teacher Code mapping & faculty credentials.</li>
                    <li>• Digital tracking of Earned Leave (EL), Medical Leave (ML), and Duty Leave (DL) for conferences.</li>
                    <li>• Annual Performance Appraisal Reports (APAR) integration.</li>
                  </ul>
                </div>

                <div className="card service-lookup-card">
                  <h4>Faculty / Staff E-Service Book Verification</h4>
                  <p className="sb-card-sub">Lookup official service ledger status by entering Employee Code:</p>
                  
                  <form onSubmit={handleEmpSearch} className="sb-search-form">
                    <div className="form-group">
                      <label className="form-label">Employee ID or PAN Card No.</label>
                      <div className="sb-input-row">
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. ITM-EMP-1048"
                          value={empSearch}
                          onChange={(e) => setEmpSearch(e.target.value)}
                          className="form-input"
                        />
                        <button type="submit" className="btn ss-btn">
                          <Search size={16} />
                          <span>Search</span>
                        </button>
                      </div>
                    </div>
                  </form>

                  {searchedEmp ? (
                    <div className="emp-record-result">
                      <div className="record-header">
                        <CheckCircle2 size={20} color="#10b981" />
                        <strong>Verified Employee Ledger</strong>
                      </div>
                      <div className="record-grid">
                        <div><span>Name:</span> <strong>{searchedEmp.name}</strong></div>
                        <div><span>Employee Code:</span> <strong>{searchedEmp.empId}</strong></div>
                        <div><span>Designation:</span> <strong>{searchedEmp.designation}</strong></div>
                        <div><span>Department:</span> <strong>{searchedEmp.department}</strong></div>
                        <div><span>Joining Date:</span> <strong>{searchedEmp.doj}</strong></div>
                        <div><span>Service Nature:</span> <strong>{searchedEmp.nature}</strong></div>
                        <div><span>Scale of Pay:</span> <strong>{searchedEmp.scale}</strong></div>
                        <div><span>Available Leaves:</span> <strong>{searchedEmp.leavesAvailable}</strong></div>
                      </div>
                      <button 
                        onClick={() => downloadDummyPdf('Certified E-Service Book Extract')}
                        className="btn btn-outline btn-sm"
                        style={{ marginTop: '1rem', width: '100%' }}
                      >
                        <Download size={14} /> Download Service Book Extract (PDF)
                      </button>
                    </div>
                  ) : (
                    <div className="sb-sample-hint">
                      <p>💡 Try entering sample employee ID: <code>ITM-EMP-1048</code> to preview the digital service book ledger.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
