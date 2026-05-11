# BusinessHub - Business Creation Platform

A modern web platform that guides entrepreneurs through every step of business creation, from planning to launch.

## Features

- **Business Plan Generator** - AI-powered templates for creating professional business plans
- **Financial Tools** - Automated financial modeling and projections
- **Legal Compliance** - Industry-specific legal guidelines and resources
- **Market Analysis** - Comprehensive market research tools
- **Networking Hub** - Connect with investors, mentors, and fellow entrepreneurs
- **Learning Resources** - Expert tutorials, guides, and industry best practices

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the project root with your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Deploy (GitHub Pages)

This repository is configured to deploy automatically to GitHub Pages when `main` is updated.

1. In GitHub, open **Settings > Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push changes to `main` (or run the **Deploy to GitHub Pages** workflow manually).

After deployment, the site URL will be:

`https://<your-github-username>.github.io/AI-business-creation/`

## Database Schema

### contact_submissions

- `id` - Unique identifier (UUID)
- `name` - Contact name
- `email` - Contact email
- `message` - Contact message
- `created_at` - Submission timestamp

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProblemSolution.tsx
│   ├── Features.tsx
│   ├── Team.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── lib/
│   └── supabase.ts
├── App.tsx
├── main.tsx
└── index.css
```

## License

MIT
