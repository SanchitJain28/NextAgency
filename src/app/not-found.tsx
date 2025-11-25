import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header-footer/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Large 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary leading-none">
              404
            </h1>
            <div
              className="mt-2 h-1 w-24 bg-primary mx-auto"
              aria-hidden="true"
            />
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have wandered off into
              the digital void. Don&apos;t worry though – we&apos;ll help you
              find your way back!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              <Link href="/">Take Me Home</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Get Help</Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="rounded-lg border border-border p-6 bg-secondary/20">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline font-medium"
              >
                → Homepage
              </Link>
              <Link
                href="/about-us"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline font-medium"
              >
                → About Us
              </Link>
              <Link
                href="/blog"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline font-medium"
              >
                → Read Blogs
              </Link>
              <Link
                href="/contact-us"
                className="text-primary hover:text-primary/80 underline-offset-4 hover:underline font-medium"
              >
                → Contact
              </Link>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
