import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Download,
  Sparkles
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import './Academics.css';

export default function Academics() {
  const { courses } = useData();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotice, setDownloadNotice] = useState('');

  const categories = ['All', 'Engineering', 'Pharmacy', 'Management', 'Computer Applications', 'Diploma'];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownloadCurriculum = (courseTitle) => {
    setDownloadNotice(`Curriculum brochure for "${courseTitle}" generated successfully!`);
    setTimeout(() => setDownloadNotice(''), 3500);
  };

  return (
    <div className="academics-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><BookOpen size={14} /> Curricula & Degrees</span>
          <h1 className="page-header-title">Academic Programs & Departments</h1>
          <p className="page-header-desc">
            Explore 12+ industry-calibrated technical, pharmaceutical, management, and diploma courses 
            approved by AICTE and affiliated to AKTU Lucknow & BTEUP.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Academics</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="section courses-list-section">
        <div className="container">
          {downloadNotice && (
            <div className="alert-notice glass-panel">
              <CheckCircle2 size={18} className="text-emerald" />
              <span>{downloadNotice}</span>
            </div>
          )}

          <div className="filter-search-wrapper">
            {/* Search Input */}
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by course (e.g., AI & ML, Pharmacy, MBA, Python)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="course-search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="clear-search-btn">
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="categories-pill-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="results-count-bar">
            <span>Showing <strong>{filteredCourses.length}</strong> academic programs</span>
          </div>

          {/* Program Cards Grid */}
          <div className="academics-cards-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card academic-full-card">
                <div className="academic-card-header">
                  <div className="category-and-code">
                    <span className="badge badge-primary">{course.category}</span>
                    <span className="intake-badge"><Users size={13} /> Intake: {course.intake} Seats</span>
                  </div>
                  <h2 className="academic-program-name">{course.title}</h2>
                  <div className="duration-row">
                    <Clock size={14} />
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>

                <div className="academic-card-body">
                  <p className="academic-desc">{course.description}</p>

                  <div className="eligibility-box">
                    <span className="eligibility-title"><GraduationCap size={15} /> Eligibility Criteria:</span>
                    <p className="eligibility-text">{course.eligibility}</p>
                  </div>

                  <div className="highlights-block">
                    <span className="hl-block-title">Key Specializations & Lab Facilities:</span>
                    <ul className="hl-list">
                      {course.highlights.map((hl, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={14} className="hl-check" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="academic-card-footer">
                  <div className="fee-info">
                    <span className="fee-caption">Annual Tuition Fee</span>
                    <span className="fee-amount">₹{course.annualFee.toLocaleString('en-IN')}<small>/yr</small></span>
                  </div>

                  <div className="card-actions">
                    <button
                      onClick={() => handleDownloadCurriculum(course.title)}
                      className="btn btn-outline btn-sm download-btn"
                      title="Download Curriculum Outline"
                    >
                      <Download size={14} /> Brochure
                    </button>
                    <Link
                      to={`/admissions?course=${course.id}`}
                      className="btn btn-accent btn-sm"
                    >
                      Apply Online <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="no-courses-found glass-panel">
              <BookOpen size={48} className="empty-icon" />
              <h3>No academic programs found</h3>
              <p>Try searching for a different keyword or select "All" categories.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Academic Governance Note */}
          <div className="governance-card glass-panel">
            <div className="gov-icon-wrap">
              <ShieldCheck size={32} />
            </div>
            <div className="gov-content">
              <h3>Affiliation & Academic Regulations</h3>
              <p>
                All B.Tech, MBA, and MCA degrees awarded at ITM Gorakhpur follow the academic curriculum, credit framework, and examination schemes of Dr. A.P.J. Abdul Kalam Technical University (AKTU, Lucknow - College Code: 120). Pharmacy degrees (B.Pharm & D.Pharm) adhere to regulations of the Pharmacy Council of India (PCI) and BTEUP.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
