# Müller Bodenbeläge Website

Modern, responsive website for Müller Bodenbeläge built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive layout with mobile-first approach
- ⚡ Fast page loads with Next.js App Router
- 🔍 SEO optimized
- 🌙 Dark/Light mode with system preference detection
- 🎭 Smooth animations and transitions
- 🔤 Custom typography with Inter and Playfair Display fonts
- 🛠️ Built with modern technologies and best practices

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Fonts:** 
  - [Inter](https://fonts.google.com/specimen/Inter) (Body)
  - [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Headings)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mueller-bodenbelaege.git
   cd mueller-bodenbelaege
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

To create a production build:

```bash
npm run build
# or
yarn build
```

## Project Structure

```
├── public/          # Static files
├── src/
│   ├── app/         # App router pages and layouts
│   ├── components/  # Reusable components
│   │   ├── layout/  # Layout components (header, footer)
│   │   └── ui/      # UI components
│   ├── lib/         # Utility functions and configurations
│   ├── providers/   # Context providers
│   └── styles/      # Global styles and Tailwind config
└── package.json     # Project dependencies and scripts
```

## Development Guidelines

- Follow TypeScript best practices and maintain type safety
- Use Tailwind CSS for styling following the utility-first approach
- Keep components small and focused on a single responsibility
- Maintain consistent code formatting with Prettier
- Follow the Next.js App Router conventions for routing and layouts

## License

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this project, via any medium, is strictly prohibited.

## Contact

For any inquiries, please contact [contact@mueller-bodenbelaege.ch](mailto:contact@mueller-bodenbelaege.ch)
