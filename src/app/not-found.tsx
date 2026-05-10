import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header-footer/Header";

export default function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 bg-background text-foreground">
        <div className="max-w-2xl mx-auto text-center">
          {/* Large 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary leading-none">
              404
            </h1>
            <div
              className="w-24 h-1 mx-auto mt-2 bg-primary"
              aria-hidden="true"
            />
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">
              Oops! Page Not Found
            </h2>
            <p className="max-w-xl mx-auto text-lg leading-relaxed text-muted-foreground">
              The page you&apos;re looking for seems to have wandered off into
              the digital void. Don&apos;t worry though – we&apos;ll help you
              find your way back!
            </p>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row">
            <Button
              asChild
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/">Take Me Home</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-8 py-3 bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/contact">Get Help</Link>
            </Button>
          </div> */}

          {/* Helpful Links */}
          {/* <div className="p-6 border rounded-lg border-border bg-secondary/20">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Popular Pages
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                href="/"
                className="font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
              >
                → Homepage
              </Link>
              <Link
                href="/about-us"
                className="font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
              >
                → About Us
              </Link>
              <Link
                href="/blog"
                className="font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
              >
                → Read Blogs
              </Link>
              <Link
                href="/contact-us"
                className="font-medium text-primary hover:text-primary/80 underline-offset-4 hover:underline"
              >
                → Contact
              </Link>
            </div>
          </div> */}


        </div>
      </div>
    </>
  );
}
