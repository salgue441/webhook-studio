import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">
          🪝 WebhookStudio
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Debug, test, and monitor webhooks with a beautiful interface
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs">Documentation</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
