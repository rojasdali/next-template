# Next.js Enterprise Template

A modern, feature-rich template for building scalable Next.js applications with best practices in mind, following [Bulletproof React](https://github.com/alan2207/bulletproof-react) principles.

## Features

- 🎨 **UI & Styling**

  - [Tailwind CSS](https://tailwindcss.com) for styling
  - [shadcn/ui](https://ui.shadcn.com/) components
  - Dark mode with `next-themes`
  - [Geist](https://vercel.com/font) font family
  - Responsive layouts

- 🏗️ **Architecture**

  - Clean project structure
  - Type-safe routing
  - Reusable layouts
  - Path aliases
  - Component organization

- 🛠️ **Development**

  - TypeScript
  - ESLint
  - Error boundaries
  - Toast notifications
  - API client

- 📡 **Data Handling**
  - [TanStack Query](https://tanstack.com/query)
  - Type-safe API layer
  - React Query DevTools
  - Zustand for state

## Getting Started

```bash
# Clone the template
git clone https://github.com/your-username/next-template.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

This template follows the Bulletproof React architecture for maintainable and scalable applications:

```
src/
├── app/                 # Application layer (Next.js pages & config)
├── components/         # Shared components
│   ├── layouts/       # Layout components
│   ├── ui/            # UI components (shadcn)
│   └── errors/        # Error handling
├── features/          # Feature-based modules
├── hooks/             # Shared hooks
├── lib/               # Utilities & config
├── providers/         # Context providers
└── types/             # Shared types
```

### Feature-First Organization

Following Bulletproof React's recommendations:

- Features are self-contained modules
- Clean boundaries between features
- Shared code in top-level directories
- No cross-feature imports
- Component colocation

## Development

### Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Files

- `src/app/provider.tsx`: Main app providers
- `src/lib/api-client.ts`: Type-safe API client
- `src/lib/react-query.ts`: React Query config
- `src/app/globals.css`: Global styles & theme

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query)
- [Tailwind CSS](https://tailwindcss.com)

## License

MIT © Dali Rojas
