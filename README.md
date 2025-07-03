# Ruwa Design System

A modern, comprehensive design system built with Next.js 14, TypeScript, Tailwind CSS, and ShadCN UI components. Ruwa provides a solid foundation for building consistent, accessible, and beautiful user interfaces.

## ✨ Features

- 🎨 **Design Tokens**: Comprehensive color, spacing, and typography tokens
- 🌓 **Dark/Light Mode**: Seamless theme switching with next-themes
- 🧩 **Component Library**: Pre-built, customizable ShadCN UI components
- 📱 **Responsive**: Mobile-first design with Tailwind CSS
- ⚡ **Performance**: Optimized Next.js 14 with App Router
- 🔧 **Developer Experience**: TypeScript, ESLint, Prettier, and strict configuration
- 🚀 **Deployment Ready**: Configured for Vercel deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or later
- npm 9.0.0 or later

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunjprkh/ruwa-health.git
   cd ruwa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ruwa/
├── src/
│   ├── app/                  # Next.js 14 App Router
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles
│   │   └── styleguide/      # Design system documentation
│   ├── components/
│   │   ├── ui/              # ShadCN UI components
│   │   └── theme-provider.tsx
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── styles/
│       └── tokens.css       # Design tokens
├── public/                  # Static assets
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── components.json         # ShadCN UI configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment configuration
```

## 🎨 Design System

### Design Tokens

Our design system is built on a foundation of design tokens that ensure consistency across all components and applications.

#### Color System
- **Semantic tokens**: `fg-primary`, `bg-secondary`, `border-accent`
- **Primitive tokens**: `blue-70`, `green-50`, `red-60`
- **Status colors**: Success, warning, error states
- **Theme support**: Light and dark mode variants

#### Spacing Scale
- Consistent spacing from `space-2` (0.25rem) to `space-40` (5rem)
- Based on a 4px grid system for pixel-perfect designs

#### Typography
- System font stack with Inter as the primary typeface
- Responsive text sizes with proper line heights
- Semantic heading hierarchy (h1-h6)

### Components

Our component library is built on top of [ShadCN UI](https://ui.shadcn.com/) with custom design tokens:

- **Button**: Multiple variants (default, secondary, destructive, outline, ghost, link)
- **Input**: Form inputs with consistent styling
- **Theme Provider**: Dark/light mode switching
- And many more coming soon...

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Utilities
npm run clean        # Clean build artifacts
```

### Adding New Components

1. **Install ShadCN component**
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Customize with design tokens**
   Components automatically use your design tokens through Tailwind configuration.

3. **Update documentation**
   Add component examples to the style guide page.

### Design Token Workflow

1. **Define tokens** in `src/styles/tokens.css`
2. **Map to Tailwind** in `tailwind.config.ts`
3. **Use in components** with Tailwind classes
4. **Document usage** in the style guide

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import in Vercel**
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure environment variables** (if needed)
   - Copy from `.env.example`
   - Add to Vercel dashboard

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use `npm run build` and deploy `out/` folder
- **Railway**: Connect GitHub repository
- **DigitalOcean App Platform**: Use Node.js buildpack

## 🎯 Usage Examples

### Using Design Tokens

```tsx
// Semantic tokens (recommended)
<div className="bg-bg-primary text-fg-primary border-border-accent">
  Content with semantic tokens
</div>

// Primitive tokens (when needed)
<div className="bg-blue-70 text-gray-white">
  Content with primitive tokens
</div>
```

### Theme Switching

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle theme
    </button>
  )
}
```

### Custom Components

```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CustomButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export function CustomButton({ variant = 'primary', children }: CustomButtonProps) {
  return (
    <Button
      className={cn(
        'font-semibold',
        variant === 'primary' && 'bg-bg-accent text-content-on-color',
        variant === 'secondary' && 'bg-bg-secondary text-fg-primary'
      )}
    >
      {children}
    </Button>
  )
}
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run quality checks**
   ```bash
   npm run lint
   npm run type-check
   npm run format:check
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ShadCN](https://twitter.com/shadcn) for the amazing component library
- [Vercel](https://vercel.com) for the deployment platform
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS

---

Built with ❤️ by [Kunj Parekh](https://github.com/kunjprkh)