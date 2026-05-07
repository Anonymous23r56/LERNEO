# Lerneo — Tech Learning Platform

A full-stack tech learning platform built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features
- 🌙 Dark / Light mode toggle
- 🏠 Landing page with hero, stats, features, categories
- 📚 Course catalog with filters (category, free/pro)
- 📖 Course detail pages with curriculum accordion
- 📊 Student dashboard with progress tracking
- 🔐 Login & Signup pages
- 💜 Freemium model (free + ₦-priced Pro courses)
- 📱 Responsive design

## Project Structure
```
lerneo/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + Navbar
│   │   ├── page.tsx            # Landing page
│   │   ├── globals.css         # Global styles + CSS variables
│   │   ├── courses/
│   │   │   └── page.tsx        # Course catalog
│   │   ├── course/
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Course detail
│   │   ├── dashboard/
│   │   │   └── page.tsx        # Student dashboard
│   │   ├── login/
│   │   │   └── page.tsx        # Login page
│   │   └── signup/
│   │       └── page.tsx        # Signup page
│   ├── components/
│   │   ├── ThemeProvider.tsx   # Dark/light theme context
│   │   ├── layout/
│   │   │   └── Navbar.tsx      # Navigation bar
│   │   └── ui/
│   │       └── CourseCard.tsx  # Reusable course card
│   └── lib/
│       └── data.ts             # Course data + types
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

## Customization

### Adding a New Course
Edit `src/lib/data.ts` and add a new object to the `COURSES` array following the `Course` interface.

### Changing Colors/Theme
All theme variables are in `src/app/globals.css` under `:root` (dark) and `.light` (light mode).

### Adding Pages
Create a new folder in `src/app/` with a `page.tsx` file — Next.js will automatically route to it.

## Next Steps (Coming Soon)
- [ ] Backend with Prisma + PostgreSQL
- [ ] Real authentication (NextAuth.js)
- [ ] Video player for lessons
- [ ] Payment integration (Paystack for ₦)
- [ ] Instructor dashboard
- [ ] Certificate generation
- [ ] Search functionality
- [ ] Community forums

https://www.figma.com/design/PRGWwnK1hPROb4i10Lc0LI

Lerneo Recommended Architecture (MVP → Scalable)
High-Level Architecture
┌────────────────────┐
                 │    React Frontend  │
                 │  (Web App - Vite)  │
                 └─────────┬──────────┘
                           │ HTTPS/API
                           ▼
                 ┌────────────────────┐
                 │ ASP.NET Core API   │
                 │   (C# Backend)     │
                 └─────────┬──────────┘
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
 ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
 │ PostgreSQL   │   │ Redis Cache  │   │ File Storage │
 │ Main Database│   │ Sessions/API │   │ S3/Cloudinary│
 └──────────────┘   └──────────────┘   └──────────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │ AI Tutor Service   │
                 │ OpenAI API / LLM   │
                 └────────────────────┘
