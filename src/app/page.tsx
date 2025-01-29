import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-wood-dark dark:text-wood-light">
            Müller Bodenbeläge
          </h1>
          <ThemeToggle />
        </div>
        
        {/* Test different color variations */}
        <div className="space-y-4">
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Farbtest</h2>
            <p className="text-muted-foreground">
              Diese Seite demonstriert unser Farbschema und Dark Mode.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-wood-light dark:bg-wood-dark rounded-lg">
              Wood Light/Dark
            </div>
            <div className="p-4 bg-wood rounded-lg text-white">
              Wood Default
            </div>
            <div className="p-4 bg-wood-dark dark:bg-wood-light rounded-lg text-white dark:text-black">
              Wood Dark/Light
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
