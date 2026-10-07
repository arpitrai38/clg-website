// Mock Data for ITM Gorakhpur Website & Portal

export const collegeInfo = {
  name: "Institute of Technology & Management",
  shortName: "ITM Gorakhpur",
  tagline: "Empowering Minds, Innovating Futures Since 2001",
  code: "AKTU Code: 120",
  established: 2001,
  affiliations: [
    "Approved by AICTE, New Delhi",
    "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
    "Board of Technical Education, Uttar Pradesh (BTEUP)",
    "Pharmacy Council of India (PCI) Approved"
  ],
  address: "AL-1, Sector-7, GIDA, Gorakhpur, Uttar Pradesh - 273209",
  phone: "+91 94152 10052",
  alternatePhone: "0551-2580532 / 2580533",
  email: "info@itmgkp.edu.in",
  admissionsEmail: "admission@itmgkp.edu.in",
  principalMessage: "At ITM Gorakhpur, we believe in transforming ambitious youth into forward-thinking engineers, managers, and healthcare professionals equipped with technical mastery and ethical leadership.",
  directorName: "Dr. N. K. Singh",
  directorTitle: "Director, ITM Gorakhpur",
  directorImage: "/images/director.png",
  campusImage: "/images/itm-campus.png",
  stats: {
    studentsEnrolled: "4,500+",
    placementRate: "88%",
    highestPackage: "₹18.5 LPA",
    averagePackage: "₹4.8 LPA",
    activeRecruiters: "120+",
    acresCampus: "15+ Acres",
    facultyCount: "160+",
    alumniNetwork: "18,000+"
  }
};

export const coursesData = [
  {
    id: "btech-cse",
    category: "Engineering",
    title: "B.Tech - Computer Science & Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 180,
    annualFee: 89500,
    eligibility: "10+2 with Physics, Mathematics, and Chemistry/CS with min 45% (40% for reserved category) + JEE Main / CUET / Direct Merit",
    description: "Industry-aligned curriculum covering Full-Stack Development, Data Structures, Cloud Computing, Cybersecurity, and Software Architecture with hands-on lab projects.",
    highlights: ["NVIDIA Deep Learning Lab Access", "Industry Certifications with AWS & RedHat", "Coding Club & Hackathon Incubation", "100% Placement Assistance"],
    slug: "btech-cse",
    featured: true
  },
  {
    id: "btech-aiml",
    category: "Engineering",
    title: "B.Tech - CSE (Artificial Intelligence & Machine Learning)",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    annualFee: 89500,
    eligibility: "10+2 with PCM with min 45% aggregate + JEE Main / CUET / Direct Merit",
    description: "Specialized program in Neural Networks, Deep Learning, Computer Vision, Generative AI, and Natural Language Processing.",
    highlights: ["AI Research Sandbox", "Kaggle & Capstone mentorship", "Workshops by IIT Kanpur alumni", "Hands-on PyTorch & TensorFlow training"],
    slug: "btech-aiml",
    featured: true
  },
  {
    id: "btech-ds",
    category: "Engineering",
    title: "B.Tech - CSE (Data Science)",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    annualFee: 89500,
    eligibility: "10+2 with PCM with min 45% aggregate",
    description: "Focus on Big Data Analytics, Predictive Modeling, Business Intelligence, Python, Apache Spark, and Cloud Data Warehousing.",
    highlights: ["Data Analytics Suite", "Predictive Analytics Capstone", "Corporate Data Challenges"],
    slug: "btech-data-science",
    featured: false
  },
  {
    id: "btech-me",
    category: "Engineering",
    title: "B.Tech - Mechanical Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    annualFee: 75000,
    eligibility: "10+2 with PCM (min 45% marks)",
    description: "Comprehensive study of Thermodynamics, CAD/CAM, Robotics, Automotive Engineering, and Advanced Manufacturing.",
    highlights: ["Automobile & CNC Workstations", "ANSYS & SolidWorks Licensed Suite", "Industrial Visits to Tata Motors & BHEL"],
    slug: "btech-me",
    featured: false
  },
  {
    id: "btech-ce",
    category: "Engineering",
    title: "B.Tech - Civil Engineering",
    duration: "4 Years (8 Semesters)",
    intake: 60,
    annualFee: 75000,
    eligibility: "10+2 with PCM (min 45% marks)",
    description: "Structural engineering, Concrete Technology, GIS & Surveying, Transportation, and Green Building infrastructure.",
    highlights: ["Total Station Surveying Lab", "Soil & Material Testing Rig", "AutoCAD Civil 3D training"],
    slug: "btech-civil",
    featured: false
  },
  {
    id: "bpharm",
    category: "Pharmacy",
    title: "Bachelor of Pharmacy (B.Pharm)",
    duration: "4 Years (8 Semesters)",
    intake: 100,
    annualFee: 95000,
    eligibility: "10+2 with PCB/PCM with min 45% marks. Approved by PCI New Delhi & Affiliated to AKTU.",
    description: "Premier pharmaceutical program with state-of-the-art analytical chemistry, pharmaceutics, pharmacognosy, and pharmacology labs.",
    highlights: ["PCI Approved Facility", "Medicinal Herbal Garden", "Hospital Clinical Training Tie-ups", "Pharma Formulation Plant visits"],
    slug: "b-pharm",
    featured: true
  },
  {
    id: "dpharm",
    category: "Pharmacy",
    title: "Diploma in Pharmacy (D.Pharm)",
    duration: "2 Years",
    intake: 60,
    annualFee: 75000,
    eligibility: "10+2 with PCB/PCM. Approved by PCI and affiliated to BTEUP.",
    description: "Foundation program for registered pharmacists, community clinical care, dispensary operations, and medicine administration.",
    highlights: ["Govt Hospital Internship", "Licensed Pharmacist Eligibility", "Interactive Anatomy & Physiology Labs"],
    slug: "d-pharm",
    featured: false
  },
  {
    id: "mba",
    category: "Management",
    title: "Master of Business Administration (MBA)",
    duration: "2 Years (4 Semesters)",
    intake: 120,
    annualFee: 78000,
    eligibility: "Graduation in any discipline with min 50% (45% for SC/ST) + CUET-PG / Direct",
    description: "Dual specializations in Marketing, Finance, Human Resource Management, and Information Technology with corporate mentorship.",
    highlights: ["Corporate Guest Lecture Series", "Live Case Study Pedagogy", "Stock Market Trading Simulations", "Paid Summer Internships"],
    slug: "mba",
    featured: true
  },
  {
    id: "mca",
    category: "Computer Applications",
    title: "Master of Computer Applications (MCA)",
    duration: "2 Years (4 Semesters)",
    intake: 60,
    annualFee: 72000,
    eligibility: "BCA / B.Sc (CS/IT) or graduation with Mathematics at 10+2 or degree level with min 50% marks.",
    description: "Advanced computing, Enterprise Software Engineering, Mobile App Development, DevOps, and Full-Stack MERN Architecture.",
    highlights: ["Live Capstone Projects", "Agile & DevOps Sprint Labs", "MNC placement drives"],
    slug: "mca",
    featured: false
  },
  {
    id: "bba",
    category: "Management",
    title: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    intake: 120,
    annualFee: 48000,
    eligibility: "10+2 in any stream with min 45% marks.",
    description: "Foundational business leadership, entrepreneurial thinking, financial accounting, consumer behavior, and digital marketing.",
    highlights: ["Startup Incubation guidance", "Business Plan competitions", "Personality Development Modules"],
    slug: "bba",
    featured: false
  },
  {
    id: "bca",
    category: "Computer Applications",
    title: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    intake: 120,
    annualFee: 52000,
    eligibility: "10+2 with Mathematics or equivalent with min 45% marks.",
    description: "Comprehensive undergraduate programming in C++, Java, Web Technologies, Database Systems, and Cloud Basics.",
    highlights: ["Modern Web Development Bootcamps", "Database & SQL Certification", "Software Industry Exposure"],
    slug: "bca",
    featured: true
  },
  {
    id: "polytechnic",
    category: "Diploma",
    title: "Polytechnic Diploma in Engineering",
    duration: "3 Years (Lateral 2 Years)",
    intake: 240,
    annualFee: 38000,
    eligibility: "10th pass with min 35% marks / JEECUP entrance or 12th PCM / ITI for Lateral Entry.",
    description: "Practical polytechnic streams in Mechanical, Civil, Electrical, and Computer Science Engineering under BTEUP.",
    highlights: ["Central Machine Workshops", "Hands-on Electrical & Circuit Labs", "State Apprenticeship Pipeline"],
    slug: "polytechnic-diploma",
    featured: false
  }
];

export const recruitersData = [
  { name: "Tata Consultancy Services (TCS)", package: "₹7.2 LPA", logo: "TCS", sector: "IT Services" },
  { name: "Infosys", package: "₹6.5 LPA", logo: "INFY", sector: "IT Services" },
  { name: "Wipro Technologies", package: "₹6.5 LPA", logo: "WIPRO", sector: "IT & Consulting" },
  { name: "Amazon", package: "₹18.5 LPA", logo: "AMZN", sector: "Product / E-commerce" },
  { name: "Tech Mahindra", package: "₹5.5 LPA", logo: "TECHM", sector: "Telecom & IT" },
  { name: "Cognizant (CTS)", package: "₹6.8 LPA", logo: "CTS", sector: "IT Services" },
  { name: "HCL Technologies", package: "₹5.8 LPA", logo: "HCL", sector: "Technology" },
  { name: "Capgemini", package: "₹7.5 LPA", logo: "CAPG", sector: "Consulting" },
  { name: "Paytm", package: "₹9.2 LPA", logo: "PAYTM", sector: "FinTech" },
  { name: "Mankind Pharma", package: "₹5.2 LPA", logo: "MANK", sector: "Pharmaceuticals" },
  { name: "Sun Pharma", package: "₹5.6 LPA", logo: "SUN", sector: "Pharmaceuticals" },
  { name: "Byju's", package: "₹8.0 LPA", logo: "BYJU", sector: "EdTech" },
  { name: "Jio Platforms", package: "₹6.0 LPA", logo: "JIO", sector: "Telecom" },
  { name: "Hexaware Technologies", package: "₹6.0 LPA", logo: "HEXA", sector: "Cloud & Automation" }
];

export const campusFacilities = [
  {
    id: "gida-main-campus",
    title: "15+ Acre Lush Green GIDA Campus & Main Academic Block",
    category: "Infrastructure",
    stats: "15+ Acres | 28,450 sq.m Built-up Area | Sector-7 GIDA",
    description: "The landmark main administrative and technical blocks of ITM Gorakhpur situated on NH-28, featuring manicured central lawns, high-tech lecture theaters, and academic wings.",
    image: "/images/itm-campus.png"
  },
  {
    id: "central-library",
    title: "Central Library & DELNET E-Resource Hub",
    category: "Academic",
    stats: "40,000+ Books | 120+ National & Int'l Journals",
    description: "Fully automated air-conditioned library with high-speed internet kiosks, DELNET digital book access, audio-visual study cubicles, and quiet research zones.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "computing-center",
    title: "High-Tech Computing & AI Labs",
    category: "Infrastructure",
    stats: "650+ Core-i7 Terminals | 1 Gbps Fiber Link",
    description: "Equipped with advanced GPU workstations, Linux server racks, cloud dev environments, and proprietary engineering simulation toolkits.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "smart-classrooms",
    title: "Digitally Enabled Smart Classrooms",
    category: "Academic",
    stats: "40+ Interactive Projector Lecture Halls",
    description: "Ergonomic tiered seating with interactive touch displays, acoustic sound systems, and lecture capture hardware for hybrid delivery.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pharma-labs",
    title: "Advanced Pharmaceutical Research Labs",
    category: "Research",
    stats: "PCI Approved | 8 Analytical Chambers",
    description: "Equipped with HPLC, UV-Spectrophotometer, dissolution test apparatus, sterile aseptic suites, and an on-campus medicinal botanical conservatory.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hostels",
    title: "Hostels with Modern Amenities",
    category: "Student Life",
    stats: "Separate 800-Bed Boys & Girls Residential Blocks",
    description: "24/7 security with CCTV surveillance, hygienic mess serving nutritious vegetarian meals, high-speed Wi-Fi, indoor games, and dedicated gymnasiums.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sports-complex",
    title: "Sports Arena & Gymnasium",
    category: "Student Life",
    stats: "Full-Sized Cricket Turf | Basketball & Badminton Courts",
    description: "Spacious outdoor sports grounds for football, volleyball, and athletics alongside modern indoor fitness gear and annual inter-collegiate tournaments.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  }
];

export const initialNotices = [
  {
    id: "not-01",
    title: "AKTU Even Semester Examination Schedule 2026-27 Released",
    category: "Examination",
    date: "2026-10-05",
    isUrgent: true,
    summary: "Students can view the finalized exam center datesheet for B.Tech, MBA, and MCA on the AKTU ERP portal.",
    link: "#"
  },
  {
    id: "not-02",
    title: "Campus Placement Drive: TCS & Infosys Scheduled for Final Year",
    category: "Placement",
    date: "2026-10-02",
    isUrgent: true,
    summary: "Eligible B.Tech (CSE, ECE) and MCA students must register with the Training & Placement Cell by October 12.",
    link: "#"
  },
  {
    id: "not-03",
    title: "National Conference on AI, Robotics & Sustainable Green Engineering",
    category: "Academic",
    date: "2026-09-28",
    isUrgent: false,
    summary: "Call for papers and registrations open for the 2-day technical symposium scheduled in November.",
    link: "#"
  },
  {
    id: "not-04",
    title: "UP Government Scholarship & Fee Reimbursement 2026 Portal Open",
    category: "Scholarship",
    date: "2026-09-22",
    isUrgent: false,
    summary: "Students are advised to fill out their renewal/fresh applications on scholarship.up.gov.in and submit hard copies to Accounts.",
    link: "#"
  },
  {
    id: "not-05",
    title: "Annual Sports Meet 'SPARDHA 2026' Trials Schedule",
    category: "Events",
    date: "2026-09-18",
    isUrgent: false,
    summary: "Inter-department trials for cricket, football, volleyball, and table tennis will begin this Saturday at the main ground.",
    link: "#"
  }
];

export const alumniTestimonials = [
  {
    name: "Aditya Mishra",
    batch: "B.Tech CSE (Batch of 2023)",
    role: "Software Development Engineer at Amazon",
    text: "The coding clubs, hackathons, and constant support of faculty at ITM Gorakhpur provided the foundation I needed to crack top product tier companies. Truly transformative experience!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Pooja Srivastava",
    batch: "B.Pharm (Batch of 2022)",
    role: "Quality Assurance Specialist at Sun Pharma",
    text: "ITM's state-of-the-art analytical labs and hospital tie-ups gave us hands-on drug testing proficiency rarely found in regional institutes.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Vikram Chauhan",
    batch: "MBA (Batch of 2024)",
    role: "Assistant Manager - Marketing at Tata Motors",
    text: "The dual-specialization curriculum and live case studies bridged the classroom and corporate world seamlessly.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];
