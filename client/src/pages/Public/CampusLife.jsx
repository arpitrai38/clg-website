import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Wifi, 
  Coffee, 
  Dumbbell, 
  BookOpen, 
  Bus,
  ArrowRight
} from 'lucide-react';
import { campusFacilities } from '../../utils/mockData';
import './CampusLife.css';

export default function CampusLife() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFacilityModal, setSelectedFacilityModal] = useState(null);

  const categories = ['All', 'Academic', 'Infrastructure', 'Research', 'Student Life'];

  const filteredFacilities = activeCategory === 'All'
    ? campusFacilities
    : campusFacilities.filter(f => f.category === activeCategory);

  const studentClubs = [
    {
      name: "ByteCode Tech & Coding Club",
      category: "Technical",
      desc: "Weekly competitive coding on HackerRank, Open Source Hackathons, and AI project cohorts.",
      lead: "Dept. of Computer Science"
    },
    {
      name: "RoboTech & IoT Innovators",
      category: "Robotics",
      desc: "Hands-on micro-controller robotics, drone design, and participation in national IIT tech fests.",
      lead: "Mechatronics Lab"
    },
    {
      name: "Aaveg Cultural & Arts Troupe",
      category: "Cultural",
      desc: "Annual fest organization, music band, drama & street plays, and fine arts exhibitions.",
      lead: "Student Council"
    },
    {
      name: "Spardha Sports Society",
      category: "Sports",
      desc: "Inter-department cricket league, basketball tournament, badminton matches, and athletic meets.",
      lead: "Physical Education Dept."
    }
  ];

  return (
    <div className="campus-life-page">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-tag"><Building size={14} /> 15+ Acre Green Campus in GIDA</span>
          <h1 className="page-header-title">Campus Life & Virtual Tour</h1>
          <p className="page-header-desc">
            Explore state-of-the-art learning spaces, residential hostels, modern digital labs, 
            and vibrant student culture on the Lucknow-Gorakhpur National Highway.
          </p>
          <div className="breadcrumb-trail">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <span>Campus Life</span>
          </div>
        </div>
      </section>

      {/* Facilities Showcase & Interactive Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Campus Tour</span>
            <h2 className="section-title">Discover Our World-Class Infrastructure</h2>
            <p className="section-desc">
              Filter by facility category and click to inspect features, lab hardware, and campus amenities.
            </p>
          </div>

          <div className="filter-tabs">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`tab-btn ${activeCategory === c ? 'active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredFacilities.map((fac) => (
              <div 
                key={fac.id} 
                className="card gallery-card"
                onClick={() => setSelectedFacilityModal(fac)}
              >
                <div className="gallery-img-container">
                  <img src={fac.image} alt={fac.title} className="gallery-img" />
                  <span className="gallery-tag">{fac.category}</span>
                </div>
                <div className="gallery-card-body">
                  <span className="gallery-stat">{fac.stats}</span>
                  <h3 className="gallery-title">{fac.title}</h3>
                  <p className="gallery-desc">{fac.description}</p>
                  <span className="explore-label">Click for tour specs &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Inspection Modal */}
      {selectedFacilityModal && (
        <div className="modal-overlay" onClick={() => setSelectedFacilityModal(null)}>
          <div className="card modal-content-box" onClick={(e) => e.stopPropagation()}>
            <img src={selectedFacilityModal.image} alt={selectedFacilityModal.title} className="modal-top-img" />
            <div className="modal-body-padding">
              <span className="badge badge-accent">{selectedFacilityModal.category}</span>
              <h2 className="modal-title">{selectedFacilityModal.title}</h2>
              <p className="modal-stat-line">{selectedFacilityModal.stats}</p>
              <p className="modal-desc-full">{selectedFacilityModal.description}</p>
              
              <div className="modal-highlights">
                <h4>Facility Specifications:</h4>
                <ul className="modal-specs-list">
                  <li><CheckCircle2 size={14} className="hl-check" /> 100% High-speed Wi-Fi & Solar Backup</li>
                  <li><CheckCircle2 size={14} className="hl-check" /> 24/7 CCTV surveillance & dedicated maintenance team</li>
                  <li><CheckCircle2 size={14} className="hl-check" /> Accessible to all students with smart card registration</li>
                </ul>
              </div>

              <div className="modal-footer-btns">
                <button onClick={() => setSelectedFacilityModal(null)} className="btn btn-outline btn-sm">
                  Close Tour
                </button>
                <Link to="/admissions" className="btn btn-accent btn-sm">
                  Apply & Visit Campus
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Residential & Hostel Life */}
      <section className="section bg-subtle-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Home Away From Home</span>
            <h2 className="section-title">Hostels & Campus Amenities</h2>
            <p className="section-desc">
              Comfortable, secure, and vibrant residential blocks accommodating over 800 students.
            </p>
          </div>

          <div className="amenities-grid">
            <div className="card amenity-card">
              <ShieldCheck size={28} className="amenity-icon" />
              <h4>24x7 Security & CCTV</h4>
              <p>Biometric entrance, trained security guards, and separate warden supervision for boys and girls hostels.</p>
            </div>

            <div className="card amenity-card">
              <Coffee size={28} className="amenity-icon" />
              <h4>Hygienic Dining Mess</h4>
              <p>Nutritious vegetarian breakfast, lunch, snacks, and dinner prepared with quality checks and water purification systems.</p>
            </div>

            <div className="card amenity-card">
              <Wifi size={28} className="amenity-icon" />
              <h4>Gigabit Wi-Fi Connectivity</h4>
              <p>Uninterrupted high-speed internet connectivity across hostel study lounges, corridors, and dining zones.</p>
            </div>

            <div className="card amenity-card">
              <Dumbbell size={28} className="amenity-icon" />
              <h4>Gymnasium & Fitness Hub</h4>
              <p>Fully equipped weights and cardio gym equipment accessible exclusively to residential students morning and evening.</p>
            </div>

            <div className="card amenity-card">
              <Bus size={28} className="amenity-icon" />
              <h4>City Transport Fleet</h4>
              <p>College buses connect all sectors of Gorakhpur city, railway station, airport, and neighboring towns.</p>
            </div>

            <div className="card amenity-card">
              <BookOpen size={28} className="amenity-icon" />
              <h4>Late-Night Study Rooms</h4>
              <p>Dedicated quiet discussion chambers and reading halls in each hostel block during exam seasons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Clubs & Fests */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Student Activities</span>
            <h2 className="section-title">Student Societies & Cultural Life</h2>
            <p className="section-desc">
              Beyond lectures, explore dynamic student-led initiatives that cultivate camaraderie and leadership.
            </p>
          </div>

          <div className="clubs-grid">
            {studentClubs.map((club, i) => (
              <div key={i} className="card club-card">
                <span className="badge badge-primary">{club.category}</span>
                <h3 className="club-name">{club.name}</h3>
                <p className="club-desc">{club.desc}</p>
                <span className="club-lead">Mentored by: {club.lead}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/admissions" className="btn btn-primary btn-lg">
              <span>Experience ITM Campus First-Hand — Schedule a Visit</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
