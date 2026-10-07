# ITM Gorakhpur - Modernized College Web Portal & Management System

> **Institute of Technology & Management (ITM), Gorakhpur**  
> *Approved by AICTE, New Delhi | Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU Lucknow - College Code: 120) & BTEUP | PCI Approved*  
> Campus: AL-1, Sector-7, GIDA, Gorakhpur, Uttar Pradesh - 273209

---

## 🌟 Overview & Rebuild Highlights

This project transforms the legacy [itmgkp.edu.in](https://itmgkp.edu.in/) WordPress website into a modern web application designed for high performance, accessibility, responsiveness, and rich student interaction.

### 🎨 Visual & Design System
- **Curated Color Palette**: Collegiate Navy (`#0f3460`), Deep Academic Midnight (`#091f3d`), Vibrant Warm Gold (`#f59e0b`), and Electric Cyan (`#0284c7`).
- **Typography**: Google Fonts (*Plus Jakarta Sans* for clean legibility and *Outfit* for modern display titles).
- **Glassmorphism & Depth**: Multi-layer blurred backdrop filters, floating cards, subtle gradients, and micro-hover lifts.
- **Theme Engine**: Light / Dark mode toggle with system auto-detection and persistence.
- **100% Responsive**: Tested on desktop, tablet, and mobile with animated hamburger menu.

---

## 🚀 Key Modern Features

1. **Interactive Admissions & Dynamic Fee Estimator** (`/admissions`):
   - Real-time tuition calculator based on selected program (B.Tech, Pharmacy, MBA, BCA, Polytechnic).
   - Academic merit scholarship discount selector (10% to 25% waiver).
   - Optional hostel accommodation and AC bus transport calculations.
   - Online admission application form with immediate reference ID generation (`INQ-XXXX`).

2. **Student Grievance Redressal System (GRS)** (`/grievance`):
   - AICTE & AKTU mandated confidential grievance submission.
   - **Live Ticket Tracker**: Search any ticket (e.g., `GRS-2026-089` or `GRS-2026-092`) to view real-time investigation findings and administration remarks.
   - Anti-Ragging statutory declarations and national toll-free helpline.

3. **Filterable Academic Programs Directory** (`/academics`):
   - Category filtering (Engineering, Pharmacy, Management, Computer Applications, Diploma).
   - Real-time live search across courses, syllabi, and tech specializations (AI/ML, Data Science, etc.).
   - Instant downloadable curriculum brochure generation.

4. **Placement Records & Career Acceleration Tracker** (`/placements`):
   - Placement stats: **₹18.5 LPA Highest CTC**, **₹4.8 LPA Average CTC**, **88% Success Rate**, **120+ Recruiters**.
   - Sector-wise recruiter filter (IT Services, Product/E-Commerce, Pharma, FinTech).
   - 4-Year career readiness roadmap and alumni testimonials.

5. **Campus Life & Virtual Tour** (`/campus-life`):
   - Modal inspection for Central DELNET Library (40,000+ volumes), High-Tech AI & GPU Labs, Smart Classrooms, PCI Analytical Labs, and Sports Arenas.
   - Student clubs showcase (*ByteCode Tech Club*, *RoboTech Society*, *Aaveg Cultural Troupe*, *Spardha Sports*).

6. **Real-Time Notice Board** (`/notices`):
   - Live academic notices with category tags (Exam, Placement, Scholarship, Events).
   - Urgent circulars highlighted with pulsing alerts.
   - Instant PDF circular download simulation.

7. **Administrative Portal** (`/admin`):
   - KPI metrics dashboard (Total Leads, Active Notices, Pending Grievances).
   - Lead verification and admission application pipeline.
   - Real-time notice publisher (with urgent tag).
   - Grievance resolution desk to assign tickets, update status, and post remarks.

8. **Student Desk** (`/student`):
   - Roll number profile, semester attendance (88.5%), and CGPA (8.42).
   - Exam admit card and fee clearance certificate downloads.
   - Live tracking of student's filed grievances.

---

## 🔑 Demo Login Accounts

Access the portals anytime via **Portal Login** (`/login`) with one-click test buttons:
- **Administrator**: `admin@itmgkp.edu.in` -> Leads management, notice publishing, grievance resolution.
- **Student**: `Rahul Tiwari` (Roll No: `220120010045`) -> Admit card download, attendance, grievance desk.

---

## 🛠️ Project Structure & Tech Stack

```
clg website/
├── client/                     # Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── api/                # API client to talk to backend
│   │   ├── assets/             # Static brand assets
│   │   ├── components/         # Reusable components (ScrollToTop, etc.)
│   │   ├── context/            # DataContext (CRUD state) & ThemeContext
│   │   ├── layouts/            # Navbar, Footer, RootLayout
│   │   ├── pages/
│   │   │   ├── Public/         # Home, Academics, Admissions, Placements,
│   │   │   │                   # CampusLife, Notices, Grievance, About, Contact, Login
│   │   │   ├── Admin/          # Admin Dashboard & Redressal Desk
│   │   │   └── Student/        # Student Portal & Hall Ticket Download
│   │   ├── router/             # AppRouter (React Router DOM v6)
│   │   ├── utils/              # Mock Data for ITM Gorakhpur
│   │   ├── index.css           # Design Tokens & CSS Variables System
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend API (Node + Express)
│   ├── routes/
│   │   ├── noticeRoutes.js     # /api/notices
│   │   ├── admissionRoutes.js  # /api/admissions
│   │   └── grievanceRoutes.js  # /api/grievances
│   ├── server.js               # Express application on port 5000
│   └── package.json
│
└── package.json                # Root orchestration scripts
```

---

## 💻 How to Run Locally

### 1. Run Frontend (Client)
```bash
cd client
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 2. Run Backend (Server)
```bash
cd server
npm start
```
The API will be live on **[http://localhost:5000](http://localhost:5000)** (Health check: `/api/health`).

### Or from the root directory:
```bash
npm run dev:client   # Runs Vite frontend on port 3000
npm run dev:server   # Runs Express backend on port 5000
```
