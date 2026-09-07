import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            ✨ Mandeep
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            42 Production-Ready React Components
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-2">🎨 Component Library</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Complete shadcn/ui component library with Radix UI primitives
            </p>
            <Button>Get Started</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-2">🚀 TanStack Ready</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Built for TanStack Start, Router, and React Query
            </p>
            <Button variant="outline">Learn More</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-2">💅 Tailwind CSS</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Fully styled with Tailwind CSS and dark mode support
            </p>
            <Button variant="secondary">Explore</Button>
          </Card>
        </div>

        <div className="text-center text-slate-500 dark:text-slate-400">
          <p>Ready for development • TypeScript • Accessible • Production Ready</p>
        </div>
      </div>
    </div>
  )
}
