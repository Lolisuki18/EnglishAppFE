# English App - Next.js Project

## Project Structure

```
EnglishAppFE/
├── public/                  # Static assets (Images, Fonts, Icons)
├── src/                     # Main source code
│   ├── app/                 # Routing Layer (Pages & Layouts)
│   │   ├── (auth)/          # Route Group: Login/Register
│   │   ├── api/             # Backend API Routes
│   │   ├── layout.tsx       # Root Layout
│   │   └── page.tsx         # Home Page
│   │
│   ├── components/          # UI Layer
│   │   ├── ui/              # Reusable components (Button, Input, Modal)
│   │   ├── layouts/         # Layout components (Header, Sidebar, Footer)
│   │   └── features/        # Feature-specific components
│   │
│   ├── lib/                 # Configuration (Database, 3rd party services)
│   ├── services/            # API Service Layer
│   ├── hooks/               # Custom Hooks
│   ├── utils/               # Helper functions
│   ├── types/               # TypeScript Definitions
│   ├── constants/           # Constants (Config, Menu items, Regex)
│   ├── store/               # State Management
│   ├── providers/           # App Providers (Theme, Auth, Redux)
│   └── styles/              # Global styles
│
├── .env.local               # Environment variables (Not committed to Git)
├── next.config.mjs          # Next.js Configuration
├── tsconfig.json            # TypeScript Configuration
└── package.json             # Dependencies
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production

```bash
npm start
```

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Features

- ✅ App Router with Route Groups
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ API Routes
- ✅ Modular component structure
- ✅ Custom hooks
- ✅ Type-safe development

## Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
