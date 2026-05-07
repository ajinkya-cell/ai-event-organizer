# Expected Outcomes & Social Relevance Report
### Project: AI-Powered Event Organiser (Spott)
### Student: Ajinkya | Report Date: April 2026

---

## Section 1: Expected Outcomes (Before Project Start)

### 1.1 Technical Learning Objectives

- Gain hands-on experience building a full-stack web application using modern frameworks (Next.js App Router, Convex, Clerk)
- Understand how to integrate third-party AI APIs (Google Gemini) into real-world user workflows
- Learn to design and implement a real-time, serverless backend with live data sync using Convex
- Explore event-driven authentication flows and secure webhook handling (Clerk → Convex sync)
- Practise building accessible, component-driven UIs using Radix UI primitives and Tailwind CSS
- Understand QR code lifecycle — generation, storage, scanning, and stateful check-in validation

### 1.2 Professional & Project Management Goals

- Complete a full product development cycle — from ideation and research to implementation and documentation
- Practice translating user requirements into a working software system with clean architecture
- Develop experience in managing code repositories, branching, and iterative feature delivery
- Build a portfolio-ready, production-grade project that demonstrates end-to-end engineering capability
- Learn to write formal technical documentation including an Abstract, Methodology, System Design, and Report

### 1.3 Soft Skills Development

- Improve self-directed learning and problem-solving without senior oversight
- Build time management skills across a structured 3-month development timeline
- Enhance technical writing and documentation ability for professional communication
- Develop the habit of researching existing tools (Eventbrite, Luma, Cvent) before designing solutions

---

## Section 2: Achieved Outcomes (Till Date)

### 2.1 Technical Milestones

- **Full-Stack Architecture Delivered**: Successfully built and integrated a complete Next.js 16 + Convex + Clerk application with real-time data sync, authentication, and a Gemini-powered AI layer.
- **AI Integration Achieved**: Implemented a functional "Generate with AI" feature using Google Gemini that produces structured JSON for event fields and auto-populates a multi-step creation form.
- **QR Ticketing System Built**: Designed and delivered end-to-end QR ticketing — unique code generation on registration, downloadable ticket view, and camera-based check-in scanning via `html5-qrcode`.
- **Real-Time Database with Convex**: Wrote schema, indices, and all backend mutations/queries (`createEvent`, `registerForEvent`, `checkInAttendee`, `getMyRegistrations`, `getDashboardStats`) with proper authentication guards.
- **Security & Integrity**: Implemented ACID-safe check-in mutation preventing duplicate scans; confirmed identity checks on all write operations; secured all routes via Next.js middleware.
- **Full CRUD Lifecycle**: Delivered complete user journeys — Create Event → Explore → Register → Receive Ticket → Scan → Check-in — all tested end-to-end.
- **CI/CD & DevOps Awareness**: Configured `package.json` to run both Next.js and Convex dev servers concurrently; managed env variables and webhooks for different environments.
- **UI/UX Polish**: Performed multiple UI audit passes; integrated custom Google Fonts (Instrument Serif, Outfit, Geist Mono); applied responsive layouts for both desktop and mobile viewports.

### 2.2 Professional Growth

- **Report Writing**: Independently authored a full-length academic project report covering Abstract, Introduction, Literature Survey, Methodology, System Design, Implementation, Results, and Conclusion.
- **System Design Skills**: Created ER diagrams, UI wireframes, and documented the complete API structure and data flow for the project.
- **Debugging & Resilience**: Resolved multiple real-world bugs (namespace mismatches, auth state persistence issues, Convex sync failures, React Hook Form integration edge cases) through systematic root-cause analysis.
- **Research & Competitive Analysis**: Conducted structured research on existing platforms (Eventbrite, Luma, Cvent, Meetup) and articulated the unique value proposition of the Spott platform.
- **Version Control Discipline**: Maintained a clean GitHub repository with structured commits aligned to feature development milestones.

### 2.3 Soft Skills Gained

- **Independent Problem Solving**: Successfully navigated complex integration challenges (Clerk webhook → Convex user sync, Gemini prompt engineering) with no direct guidance.
- **Structured Time Management**: Delivered the project across 14+ weeks in a phased, disciplined manner — setup → backend → features → polish → documentation.
- **Technical Documentation**: Developed the ability to clearly articulate system architecture, data models, and API behavior in written form for an academic audience.
- **Design Sensibility**: Developed an eye for UI/UX quality by iterating on component layouts, typography, and color contrast across multiple review passes.

---

## Section 3: Broader Impact & Social Relevance

### 3.1 Problem Being Addressed

Event management in India — particularly for colleges, communities, and independent organizers — remains fragmented and expensive. Existing platforms like Eventbrite or Cvent are either geo-restricted, priced for enterprises, or lack intelligent automation. Small-scale event organizers often rely on WhatsApp groups, Google Forms, and manual check-in sheets — leading to errors, fraud, and poor attendee experiences.

**Spott directly addresses these pain points** by offering an AI-powered, free-to-use platform tailored for everyday organizers.

### 3.2 Social Benefits

| Benefit Area | How Spott Contributes |
|---|---|
| **Democratizing Event Management** | Any individual, student group, or community can create and manage professional events without technical expertise or platform fees. |
| **Reducing Event Fraud** | QR-based ticketing with duplicate-prevention logic eliminates ticket sharing and unauthorized entry. |
| **AI Accessibility** | The "Generate with AI" feature makes content creation accessible to non-writers and non-technical organizers who struggle to draft event descriptions. |
| **Community Engagement** | A public Explore page enables discovery of local events, fostering community participation and cultural engagement. |
| **Digital Literacy** | Encourages both organizers and attendees to engage with modern digital workflows — QR scanning, online ticketing, and cloud-based registration. |
| **Data-Driven Organizing** | The organizer dashboard surfaces real-time registration metrics, enabling better planning and resource allocation for future events. |

### 3.3 Target Demographics

- **College Students & Clubs**: Simplifies fest, workshop, and competition management at educational institutions.
- **Independent Community Organizers**: Enables meetups, open-mic nights, book clubs, and local events with zero infrastructure cost.
- **Small NGOs & Non-Profits**: Allows charitable events and awareness drives to be organized and promoted professionally.
- **Emerging Entrepreneurs**: Provides a launchpad for hosted product demos, networking events, and seminars.

### 3.4 Alignment with Broader Technological Trends

- **AI Democratization**: Integrating Gemini AI reflects the broader societal trend of making AI tools accessible to non-technical users for productivity gains.
- **Serverless & Real-Time Web**: Built on Convex's serverless reactive platform, the project exemplifies the future of scalable, cost-effective web infrastructure.
- **Digital India Vision**: Contributes to India's push toward digital-first event management solutions, reducing dependence on paper-based registration, physical tickets, and manual crowd management.
- **Open Web Standards**: Built entirely on open-source frameworks and web standards, ensuring portability and community extensibility.

### 3.5 Environmental Relevance

- **Paperless Ticketing**: QR-based digital tickets eliminate the need for printed entry passes, reducing paper waste at events.
- **Remote-First Workflows**: The online-event support in the platform accommodates virtual gatherings, reducing the carbon footprint associated with physical travel.

### 3.6 Future Social Impact Potential

- **Multilingual Support**: Adding regional language support would make the platform accessible to a far wider demographic across India.
- **Analytics for Social Causes**: NGOs and student organizations could use event data analytics to measure community engagement and report impact to donors or institutions.
- **Accessibility Features**: Future iterations incorporating screen-reader support and simplified UX would make event access inclusive for differently-abled users.
- **Integration with Government Digital Portals**: Could partner with DigiLocker or similar government platforms to provide verified digital attendance certificates for professional workshops and skill-building seminars.

---

*Report compiled as part of the Final Semester Project — AI-Powered Event Organiser (Spott)*
*Student: Ajinkya | April 2026*
