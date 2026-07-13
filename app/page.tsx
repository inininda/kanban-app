import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ImageTabs from "@/components/landing/image-tabs"
import FeatureSection from "@/components/landing/feature-section"

// TODO: fix the styling
export default function Home() {
  return (
    <div className="flex min-h-screen flex-column bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-black">
              A better way to track your job application.
            </h1>
            <p className="text-muted-foreground">
              Capture, Organie and Manage Your Applications.
            </p>
            <div>
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                  Start For Free
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p>Free forever. No credit card required.</p>
            </div>
          </div>
        </section>
        {/** Hero Images Section With Tabs */}
        <ImageTabs />
        {/** Feature section */}
        <FeatureSection />
      </main>
    </div>
  )
}
