import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Check, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  Laptop, 
  FlaskConical, 
  Briefcase, 
  Calendar, 
  Clock, 
  MapPin, 
  Star,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Compass,
  Sparkles
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { collegeInfo, recruitersData, campusFacilities, alumniTestimonials } from '../../utils/mockData';
import './Home.css';

export default function Home() {
  const { courses, notices } = useData();
  const [activeCourseTab, setActiveCourseTab] = useState('All');

  const courseCategories = ['All', 'Engineering', 'Pharmacy', 'Management', 'Computer Applications', 'Diploma'];
  const filteredCourses = activeCourseTab === 'All' 
    ? courses.slice(0, 6) 
    : courses.filter(c => c.category === activeCourseTab);

  return (
    <div className="eudaimonia-home">
      {/* =========================================================================
          1. SLIDER THREE: HERO SECTION WITH PRATA HEADLINE & ROTATING BADGE
          ========================================================================= */}
      <section className="slider-area slider-three">
        <div className="slider-bg-three">
          <div className="container">
            <div className="slider-content-wrap">
              <div className="slider-text-col">
                <span className="slider-sub-kicker">
                  <span className="kicker-line"></span> WELCOME TO ITM GORAKHPUR
                </span>

                <h1 className="slider-prata-title">
                  Take The First Step To Knowledge With Excellence
                </h1>

                <p className="slider-desc">
                  Eastern Uttar Pradesh's premier institute for Engineering, Pharmaceutical Sciences & Management. 
                  Approved by AICTE, affiliated to AKTU Lucknow (College Code: 120), delivering 25 years of transformative leadership.
                </p>

                <div className="slider-btn-group">
                  <Link to="/admissions#apply-online-form" className="btn ss-btn">
                    <Sparkles size={16} />
                    <span>APPLY ONLINE 2026-27</span>
                  </Link>
                  <Link to="/academics" className="btn2 ss-btn2">
                    <ArrowUpRight size={16} />
                    <span>Explore Courses</span>
                  </Link>
                </div>
              </div>

              {/* Rotating 25-Years Circular Badge */}
              <div className="slider-badge-col">
                <div className="eudaimonia-spin-wrapper">
                  <div className="spin-badge circular-seal-box">
                    <svg viewBox="0 0 200 200" className="circular-text-svg">
                      <path
                        id="circlePath"
                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        fill="none"
                      />
                      <text className="circular-text">
                        <textPath href="#circlePath" startOffset="0%">
                          • 25 YEARS OF EXCELLENCE • ITM GORAKHPUR • ESTD 2001
                        </textPath>
                      </text>
                    </svg>
                    <div className="seal-center-crest">
                      <span className="crest-years">25</span>
                      <span className="crest-tag">YEARS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================================
            2. FOUR FLOATING FEATURE BOXES (Overlapping Hero Base)
            ======================================================================= */}
        <div className="container">
          <div className="feature-boxes-grid">
            <div className="feature-item-box">
              <span className="feature-num">01</span>
              <div className="feature-icon-wrap">
                <GraduationCap size={32} />
              </div>
              <h3 className="feature-title">Quality Degrees</h3>
              <p className="feature-text">
                AICTE approved B.Tech, Pharmacy, MBA, and Polytechnic courses under AKTU Code 120.
              </p>
              <Link to="/academics" className="feature-arrow-link">
                Read More <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="feature-item-box">
              <span className="feature-num">02</span>
              <div className="feature-icon-wrap">
                <Users size={32} />
              </div>
              <h3 className="feature-title">Experienced Faculty</h3>
              <p className="feature-text">
                160+ distinguished professors, research fellows, and corporate domain mentors.
              </p>
              <Link to="/about" className="feature-arrow-link">
                Read More <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="feature-item-box">
              <span className="feature-num">03</span>
              <div className="feature-icon-wrap">
                <Laptop size={32} />
              </div>
              <h3 className="feature-title">High-Tech Labs</h3>
              <p className="feature-text">
                NVIDIA AI Sandbox, Cloud Computing, DELNET Central Library, and PCI Analytical Suites.
              </p>
              <Link to="/campus-life" className="feature-arrow-link">
                Read More <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="feature-item-box">
              <span className="feature-num">04</span>
              <div className="feature-icon-wrap">
                <Briefcase size={32} />
              </div>
              <h3 className="feature-title">Stellar Placements</h3>
              <p className="feature-text">
                Highest CTC ₹18.5 LPA, 88% placement rate, and 120+ active national recruiters.
              </p>
              <Link to="/placements" className="feature-arrow-link">
                Read More <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ABOUT US: IMAGE COLLAGE & DIRECTORS DESK (Eudaimonia Layout)
          ========================================================================= */}
      <section className="section about-section-eudaimonia">
        <div className="container">
          <div className="about-grid-eudaimonia">
            {/* Left Image Collage */}
            <div className="about-img-collage">
              <div className="about-img-main">
                <img 
                  src="/images/itm-campus.png" 
                  alt="ITM Gorakhpur Campus Building" 
                  className="img-primary-about"
                />
              </div>
              <div className="about-img-sub">
                <img 
                  src="/images/director.png" 
                  alt="Dr. N. K. Singh - Director ITM Gorakhpur" 
                  className="img-secondary-about"
                />
              </div>
              <div className="about-experience-badge">
                <span className="badge-big-num">25+</span>
                <span className="badge-text">Years of Quality Education in Eastern UP</span>
              </div>
            </div>

            {/* Right Text Description */}
            <div className="about-text-content">
              <span className="section-sub-kicker">
                <span className="kicker-line"></span> ABOUT OUR UNIVERSITY
              </span>

              <h2 className="section-prata-title">
                A Few Words About Institute of Technology & Management
              </h2>

              <p className="about-lead-para">
                Established in 2001 in GIDA Gorakhpur, ITM has spent a quarter of a century pioneering technical discovery, pharmaceutical research, and business acumen across northern India.
              </p>

              <div className="about-checklist">
                <div className="check-item">
                  <div className="check-icon-circle"><Check size={14} /></div>
                  <div>
                    <h4>AICTE & PCI Approved Curriculum</h4>
                    <p>Affiliated to AKTU Lucknow (Code 120) with strict compliance to national academic frameworks.</p>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-icon-circle"><Check size={14} /></div>
                  <div>
                    <h4>15+ Acre Lush Green GIDA Campus</h4>
                    <p>Situated on NH-28 with solar power facilities, on-campus bank ATM, and high-speed fiber internet.</p>
                  </div>
                </div>

                <div className="check-item">
                  <div className="check-icon-circle"><Check size={14} /></div>
                  <div>
                    <h4>Career Readiness & Innovation Cell</h4>
                    <p>Continuous aptitude training, LeetCode coding bootcamps, and IIT-partnered technical hackathons.</p>
                  </div>
                </div>
              </div>

              <div className="about-director-row">
                <div className="director-profile-brief">
                  <img 
                    src="/images/director.png" 
                    alt={collegeInfo.directorName} 
                    className="director-thumb-avatar"
                  />
                  <div className="director-signature-box">
                    <span className="director-name-bold">{collegeInfo.directorName}</span>
                    <span className="director-desig-sub">{collegeInfo.directorTitle}</span>
                  </div>
                </div>
                <Link to="/about" className="btn ss-btn">
                  <span>Read Full History</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3.5 DIRECTOR'S DESK: EXECUTIVE LEADERSHIP SECTION
          ========================================================================= */}
      <section className="section director-section-home" id="director-desk">
        <div className="container">
          <div className="card director-card-home">
            <div className="director-grid-home">
              {/* Director Image & Credentials */}
              <div className="director-photo-col">
                <div className="director-photo-frame">
                  <img 
                    src="/images/director.png" 
                    alt="Dr. N. K. Singh - Director ITM Gorakhpur" 
                    className="director-img-actual"
                  />
                  <div className="director-crest-badge">
                    <span>DIRECTOR'S DESK</span>
                  </div>
                </div>
                <div className="director-meta-names">
                  <h3>{collegeInfo.directorName}</h3>
                  <span className="director-title-tag">{collegeInfo.directorTitle}</span>
                  <span className="director-credentials-pill">Ph.D, M.Tech (IIT Roorkee)</span>
                </div>
              </div>

              {/* Director Speech & Leadership Pillars */}
              <div className="director-quote-col">
                <div className="director-quote-header">
                  <span className="section-sub-kicker">
                    <span className="kicker-line"></span> LEADERSHIP VISION
                  </span>
                  <h2 className="director-quote-title">
                    "Fostering Technical Mastery, Research Innovation & Ethical Leadership"
                  </h2>
                </div>

                <p className="director-speech-text">
                  "At ITM Gorakhpur, we believe that education is an empowering journey that converts youthful curiosity 
                  into global engineering and managerial prowess. For over 25 years, our faculty and research mentors 
                  have dedicated themselves to building eastern Uttar Pradesh's finest educational ecosystem — where 
                  every student gains direct industry exposure, modern laboratory rigor, and holistic character."
                </p>

                <div className="director-pillars-row">
                  <div className="dir-pillar-item">
                    <Award size={18} />
                    <span>AICTE & AKTU Code 120</span>
                  </div>
                  <div className="dir-pillar-item">
                    <Sparkles size={18} />
                    <span>MoE Innovation Cell (IIC)</span>
                  </div>
                  <div className="dir-pillar-item">
                    <ShieldCheck size={18} />
                    <span>100% Placement Support</span>
                  </div>
                </div>

                <div className="director-cta-row">
                  <Link to="/about" className="btn ss-btn">
                    <span>Read Full Director's Message</span>
                    <ArrowRight size={15} />
                  </Link>
                  <Link to="/admissions" className="btn btn-outline">
                    <span>Explore Admissions 2026-27</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. POPULAR COURSES SECTION (Eudaimonia Course Cards)
          ========================================================================= */}
      <section className="section bg-courses-eudaimonia">
        <div className="container">
          <div className="section-title-center">
            <span className="section-sub-kicker">
              <span className="kicker-line"></span> EXPLORE PROGRAMS
            </span>
            <h2 className="section-prata-title">
              Our Most Popular Academic Offerings
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="course-tabs-filter">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCourseTab(cat)}
                className={`course-tab-pill ${activeCourseTab === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="courses-grid-eudaimonia">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-single-card">
                <div className="course-thumb-wrap">
                  <img 
                    src={
                      course.category === 'Engineering'
                        ? 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
                        : course.category === 'Pharmacy'
                        ? 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80'
                        : course.category === 'Management'
                        ? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
                        : 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
                    }
                    alt={course.title}
                    className="course-thumb-img"
                  />
                  <span className="course-cat-tag">{course.category}</span>
                  <span className="course-fee-pill">₹{course.annualFee.toLocaleString('en-IN')}/yr</span>
                </div>

                <div className="course-card-content">
                  <div className="course-meta-top">
                    <span className="course-intake-badge">
                      <Users size={13} /> {course.intake} Seats
                    </span>
                    <div className="course-rating">
                      <Star size={12} fill="#ffb606" color="#ffb606" />
                      <Star size={12} fill="#ffb606" color="#ffb606" />
                      <Star size={12} fill="#ffb606" color="#ffb606" />
                      <Star size={12} fill="#ffb606" color="#ffb606" />
                      <Star size={12} fill="#ffb606" color="#ffb606" />
                    </div>
                  </div>

                  <h3 className="course-card-title">
                    <Link to={`/admissions?course=${course.id}`}>{course.title}</Link>
                  </h3>

                  <p className="course-card-desc">{course.description}</p>

                  <div className="course-footer-row">
                    <span className="course-duration-text">
                      <Clock size={13} /> {course.duration}
                    </span>
                    <Link to={`/admissions?course=${course.id}`} className="course-apply-btn">
                      <span>Apply</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/academics" className="btn ss-btn">
              <span>View All 12+ Degree & Diploma Programs</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. STATISTICS COUNTER SECTION (Deep Wine Background #641320)
          ========================================================================= */}
      <section className="counter-area-eudaimonia">
        <div className="container">
          <div className="counter-grid-inner">
            <div className="counter-box-single">
              <div className="counter-icon-wrap"><Users size={36} /></div>
              <h2 className="counter-big-num">4,500+</h2>
              <p className="counter-label">Enrolled Students</p>
            </div>

            <div className="counter-box-single">
              <div className="counter-icon-wrap"><Briefcase size={36} /></div>
              <h2 className="counter-big-num">120+</h2>
              <p className="counter-label">Recruiting Companies</p>
            </div>

            <div className="counter-box-single">
              <div className="counter-icon-wrap"><Award size={36} /></div>
              <h2 className="counter-big-num">₹18.5 LPA</h2>
              <p className="counter-label">Highest CTC Package</p>
            </div>

            <div className="counter-box-single">
              <div className="counter-icon-wrap"><GraduationCap size={36} /></div>
              <h2 className="counter-big-num">25+</h2>
              <p className="counter-label">Years Academic Legacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LATEST CIRCULARS & CAMPUS EVENTS
          ========================================================================= */}
      <section className="section bg-white-section">
        <div className="container">
          <div className="events-and-notices-grid">
            {/* Left: Official Circulars */}
            <div className="notices-col">
              <span className="section-sub-kicker">
                <span className="kicker-line"></span> UNIVERSITY BULLETINS
              </span>
              <h2 className="section-prata-title">Official Circulars</h2>

              <div className="circulars-cards-stack">
                {notices.slice(0, 3).map((notice) => (
                  <div key={notice.id} className="circular-card-single">
                    <div className="circular-date-stamp">
                      <span className="stamp-day">{notice.date.split('-')[2]}</span>
                      <span className="stamp-month">OCT</span>
                    </div>
                    <div className="circular-info">
                      <span className={`badge ${notice.isUrgent ? 'badge-rose' : 'badge-primary'}`}>
                        {notice.category}
                      </span>
                      <h4 className="circular-heading">
                        <Link to="/notices">{notice.title}</Link>
                      </h4>
                      <p className="circular-snippet">{notice.summary}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/notices" className="btn2" style={{ marginTop: '1.5rem' }}>
                <ArrowUpRight size={15} /> View All Circulars
              </Link>
            </div>

            {/* Right: Campus Events & Admissions Banner */}
            <div className="events-col">
              <span className="section-sub-kicker">
                <span className="kicker-line"></span> CAMPUS DIARY
              </span>
              <h2 className="section-prata-title">Upcoming Events</h2>

              <div className="event-feature-box">
                <div className="event-feature-img-wrap">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80" 
                    alt="Annual Tech Fest" 
                    className="event-feature-img"
                  />
                  <div className="event-date-overlay">
                    <strong>15</strong>
                    <span>NOV</span>
                  </div>
                </div>
                <div className="event-feature-content">
                  <span className="event-time-loc">
                    <Clock size={13} /> 10:00 AM • <MapPin size={13} /> Main Auditorium, GIDA
                  </span>
                  <h3>SPARDHA 2026 - Annual Technical & Cultural Symposium</h3>
                  <p>
                    2-day inter-collegiate festival hosting coding sprints, robotics drone racing, and management case study presentations.
                  </p>
                  <Link to="/admissions" className="btn ss-btn" style={{ marginTop: '1rem' }}>
                    <span>Register Participant</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. ALUMNI VOICES & TESTIMONIALS
          ========================================================================= */}
      <section className="section bg-courses-eudaimonia">
        <div className="container">
          <div className="section-title-center">
            <span className="section-sub-kicker">
              <span className="kicker-line"></span> TESTIMONIALS
            </span>
            <h2 className="section-prata-title">
              What Our Graduates Say
            </h2>
          </div>

          <div className="testimonials-grid-eudaimonia">
            {alumniTestimonials.map((item, idx) => (
              <div key={idx} className="testimonial-card-eudaimonia">
                <div className="testimonial-stars">
                  <Star size={14} fill="#ffb606" color="#ffb606" />
                  <Star size={14} fill="#ffb606" color="#ffb606" />
                  <Star size={14} fill="#ffb606" color="#ffb606" />
                  <Star size={14} fill="#ffb606" color="#ffb606" />
                  <Star size={14} fill="#ffb606" color="#ffb606" />
                </div>
                <p className="testimonial-quote-text">"{item.text}"</p>
                <div className="testimonial-author-row">
                  <img src={item.avatar} alt={item.name} className="author-photo" />
                  <div>
                    <h4 className="author-full-name">{item.name}</h4>
                    <span className="author-work-role">{item.role}</span>
                    <span className="author-batch-year">{item.batch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
