Here's a **professional and updated README.md** tailored for your **development branch**, which contains all the latest changes.

You can copy-paste this directly into your `README.md` file (it will replace the default Next.js one).

````markdown
# React Assessment - Kemisetso

A modern **Next.js** web application built with TypeScript, Tailwind CSS, and the App Router. This project is part of a graduate program assessment and represents the latest development work.

**Live Demo**: [https://react-assessment-kemisetso.vercel.app](https://react-assessment-kemisetso.vercel.app)

---

## ✨ Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- Modern UI components in `/app/ui`
- Authentication logic (`auth.ts`)
- Dashboard route (`/dashboard`)
- API routes (`/app/api`)
- Shared utilities (`/app/lib`), types (`/app/types`), and providers
- Responsive design with Geist font
- ESLint + Prettier + Husky for code quality
- 404 error page with custom illustration

---

## 🛠 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Font**: Geist (optimized)
- **Linting/Formatting**: ESLint, Prettier
- **Git Hooks**: Husky
- **Package Manager**: npm / Bun (bun.lock present)

---

## 📁 Project Structure

```bash
├── app/
│   ├── api/              # API routes
│   ├── dashboard/        # Dashboard pages & components
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── ui/               # Reusable UI components
│   ├── auth.ts           # Authentication logic
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home/Landing page
│   ├── providers.tsx     # Context & providers
│   └── not-found.tsx     # Custom 404 page
├── public/
│   └── 404.svg           # Custom 404 illustration
├── components/           # (if any top-level components)
├── next.config.ts
├── tsconfig.json
├── tailwind.config.js
└── package.json
```
````

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Graduate-Program-26/React-Assessment-Kemisetso.git
cd React-Assessment-Kemisetso

# Switch to development branch (latest changes)
git checkout development

# Install dependencies
npm install
# or
bun install
```

### Running the Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🚀 Deployment

The project is optimized for deployment on **Vercel** (recommended):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FGraduate-Program-26%2FReact-Assessment-Kemisetso&branch=development)

-
