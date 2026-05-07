# Daily Diary — AI-Powered Event Organiser (Spott)
### Student: Ajinkya | Project Start Date: 10/01/2026

---

## January 2026

### Week 1 (12/01/2026 - 16/01/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 12/01/2026 | Monday    | Finalized the project idea: AI-Powered Event Organiser. Sketched high-level concept and core feature list. | ✅ |
| 13/01/2026 | Tuesday   | Researched existing platforms (Eventbrite, Luma, Cvent, Meetup). Documented their limitations. | ✅ |
| 14/01/2026 | Wednesday | Defined functional requirements: event creation, registration, QR ticketing, AI assist. | ✅ |
| 15/01/2026 | Thursday  | Decided on tech stack: Next.js 16, Convex, Clerk, Gemini AI, Tailwind CSS, Radix UI.   | ✅ |
| 16/01/2026 | Friday    | Created the GitHub repo, initialized Next.js project with App Router, set up folder structure. | ✅ |

---

### Week 2 (19/01/2026 - 23/01/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 19/01/2026 | Monday    | Installed all core dependencies: Convex, Clerk, Tailwind CSS 4, Radix UI packages.     | ✅ |
| 20/01/2026 | Tuesday   | Configured Tailwind CSS with custom theme tokens and CSS variables for design system.   | ✅ |
| 21/01/2026 | Wednesday | Integrated Clerk authentication — set up sign-in, sign-up, and ClerkProvider wrapper.  | ✅ |
| 22/01/2026 | Thursday  | Connected Convex project to backend; generated `_generated/api` and set up env variables. | ✅ |
| 23/01/2026 | Friday    | Tested Clerk login flow end-to-end; confirmed JWT token is issued correctly on sign-in. | ✅ |

---

### Week 3 (26/01/2026 - 30/01/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 26/01/2026 | Monday    | Republic Day — National Holiday. No work.                                               | —         |
| 27/01/2026 | Tuesday   | Designed and wrote the full Convex database schema: `users`, `events`, `registrations` tables. | ✅ |
| 28/01/2026 | Wednesday | Added all required indices: `by_token`, `by_slug`, `by_organizer`, `by_qr_code`, etc. | ✅ |
| 29/01/2026 | Thursday  | Built `convex/users.js` — `storeUser` mutation and `getCurrentUser` internal query.    | ✅ |
| 30/01/2026 | Friday    | Set up Clerk webhook in `app/api/webhooks/clerk` to sync new users into Convex DB.     | ✅ |

---

## February 2026

### Week 1 (02/02/2026 - 06/02/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 02/02/2026 | Monday    | Built the main layout with sidebar navigation and top header for organizer dashboard.   | ✅ |
| 03/02/2026 | Tuesday   | Created reusable UI components: `Button`, `Card`, `Input`, `Dialog` from Radix primitives. | ✅ |
| 04/02/2026 | Wednesday | Designed homepage / landing page with hero section and feature highlights.              | ✅ |
| 05/02/2026 | Thursday  | Built the global `Header` and `Footer` components; added responsive navigation.        | ✅ |
| 06/02/2026 | Friday    | Tested authentication-protected routes; added Next.js middleware for route guarding.   | ✅ |

---

### Week 2 (09/02/2026 - 13/02/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 09/02/2026 | Monday    | Started building the Event Creation form — planned multi-step structure and field list. | ✅ |
| 10/02/2026 | Tuesday   | Integrated React Hook Form and Zod schema for event creation form validation.           | ✅ |
| 11/02/2026 | Wednesday | Built Step 1 of creation wizard: event title, category, tags, and description fields.  | ✅ |
| 12/02/2026 | Thursday  | Built Step 2: Date/time pickers using `react-day-picker` and `date-fns`.               | ✅ |
| 13/02/2026 | Friday    | Built Step 3: Location type toggle (Physical/Online), venue, city, state, country.     | ✅ |

---

### Week 3 (16/02/2026 - 20/02/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 16/02/2026 | Monday    | Built Step 4: Capacity, ticket type (Free/Paid) and ticket price fields.                | ✅ |
| 17/02/2026 | Tuesday   | Integrated Google Generative AI (Gemini) SDK into the project for AI content generation. | ✅ |
| 18/02/2026 | Wednesday | Wrote the system prompt for Gemini to return strictly structured JSON for event fields. | ✅ |
| 19/02/2026 | Thursday  | Connected the "Generate with AI" button to the Gemini API; displayed loading skeleton. | ✅ |
| 20/02/2026 | Friday    | Used React Hook Form's `setValue` to auto-populate form fields from the AI JSON output.| ✅ |

---

### Week 4 (23/02/2026 - 27/02/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 23/02/2026 | Monday    | Wrote `convex/events.js` — `createEvent` mutation with auth checks and slug generation. | ✅ |
| 24/02/2026 | Tuesday   | Connected frontend form submission to `useMutation(api.events.createEvent)`.           | ✅ |
| 25/02/2026 | Wednesday | Tested full event creation pipeline: AI generation → form fill → DB insert.           | ✅ |
| 26/02/2026 | Thursday  | Built `/explore` page — fetched and rendered all public events in a responsive grid.   | ✅ |
| 27/02/2026 | Friday    | Added category filter and search integration using Convex `searchIndex`.               | ✅ |

---

## March 2026

### Week 1 (02/03/2026 - 06/03/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 02/03/2026 | Monday    | Built the dynamic `/events/[slug]` public event page using `useConvexQuery`.           | ✅ |
| 03/03/2026 | Tuesday   | Designed the event detail layout: hero section, description card, organizer card, sidebar. | ✅ |
| 04/03/2026 | Wednesday | Built the `RegisterModal` component with Radix `Dialog`, form fields, and Zod validation. | ✅ |
| 05/03/2026 | Thursday  | Wrote `convex/registration.js` — `registerForEvent` mutation with capacity checks.     | ✅ |
| 06/03/2026 | Friday    | Connected `register-modal.jsx` to `useMutation(api.registration.registerForEvent)`.   | ✅ |

---

### Week 2 (09/03/2026 - 13/03/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 09/03/2026 | Monday    | Implemented QR code generation using the `react-qr-code` library on successful registration. | ✅ |
| 10/03/2026 | Tuesday   | Built `getMyRegistrations` query to fetch a user's full ticket history with event details. | ✅ |
| 11/03/2026 | Wednesday | Created the `/my-tickets` page displaying all registered events and individual QR tickets. | ✅ |
| 12/03/2026 | Thursday  | Integrated `html5-qrcode` library for camera-based QR scanning on the organizer side. | ✅ |
| 13/03/2026 | Friday    | Built the Scanner UI component — full-screen dark mode camera viewfinder with overlays. | ✅ |

---

### Week 3 (16/03/2026 - 20/03/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 16/03/2026 | Monday    | Wrote `checkInAttendee` mutation in `convex/registration.js` with fraud/duplicate protection. | ✅ |
| 17/03/2026 | Tuesday   | Connected scanner component to `useMutation(api.registration.checkInAttendee)`.        | ✅ |
| 18/03/2026 | Wednesday | Added green/red visual flash and Sonner toast notifications for scan results.           | ✅ |
| 19/03/2026 | Thursday  | Built event management dashboard page for organizers to view registrations list.       | ✅ |
| 20/03/2026 | Friday    | Tested concurrent QR scan scenario — confirmed ACID compliance prevents double check-in. | ✅ |

---

### Week 4 (23/03/2026 - 27/03/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 23/03/2026 | Monday    | Debugged `hasPro is not defined` error in `convex/events.js` — fixed args destructuring. | ✅ |
| 24/03/2026 | Tuesday   | Fixed `registrations:checkRegistration` namespace error (singular vs plural filename). | ✅ |
| 25/03/2026 | Wednesday | Fixed Convex dev not syncing — updated `package.json` to run Convex alongside Next.js. | ✅ |
| 26/03/2026 | Thursday  | Performed end-to-end testing: Create Event → Register → Get Ticket → Scan → Check-in. | ✅ |
| 27/03/2026 | Friday    | Cleaned up unused code, removed console logs, improved error messages across the app.  | ✅ |

---

## April 2026

### Week 1 (30/03/2026 - 03/04/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 30/03/2026 | Monday    | UI refinement pass — improved card layouts, spacing, and color contrast across all pages. | ✅ |
| 31/03/2026 | Tuesday   | Integrated Google Fonts: Instrument Serif for headings, Outfit for UI, Geist Mono for code. | ✅ |
| 01/04/2026 | Wednesday | Applied correct font classes to headings and components throughout all pages.           | ✅ |
| 02/04/2026 | Thursday  | Reviewed and polished the public event page — fixed mobile responsiveness issues.      | ✅ |
| 03/04/2026 | Friday    | Added share functionality (`navigator.share` / clipboard fallback) to event pages.     | ✅ |

---

### Week 2 (06/04/2026 - 10/04/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 06/04/2026 | Monday    | Reviewed all Convex mutations for security — confirmed identity checks on all write operations. | ✅ |
| 07/04/2026 | Tuesday   | Debugged and fixed sign-in button state — button was remaining visible after auth.     | ✅ |
| 08/04/2026 | Wednesday | Reviewed explore page filtering — tested category-based search with multiple events.   | ✅ |
| 09/04/2026 | Thursday  | Wrote `convex/dashboard.js` — aggregated stats query for organizer overview.           | ✅ |
| 10/04/2026 | Friday    | Final UI audit across all pages on both desktop and mobile viewports.                  | ✅ |

---

### Week 3 (13/04/2026 - 17/04/2026)

| Date       | Day       | Topic                                                                                   | Completed |
|------------|-----------|-----------------------------------------------------------------------------------------|-----------|
| 13/04/2026 | Monday    | Started writing the Project Report — Abstract, Introduction, and Literature Survey sections. | ✅ |
| 14/04/2026 | Tuesday   | Wrote Methodology, Technologies Used, and Future Scope sections of the report.         | ✅ |
| 15/04/2026 | Wednesday | Wrote System Design section — ER diagram, UI wireframes, and API structure.            | ✅ |
| 16/04/2026 | Thursday  | Wrote In-Depth Implementation section — pure data flow for event creation and scanning. | ✅ |
| 17/04/2026 | Friday    | Finalized Results, Conclusion, References, and Table of Contents in the Project Report. | ✅ |
