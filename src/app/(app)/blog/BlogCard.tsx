import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

type Blog = {
  title: string
  description: string
  href: string // e.g. "/headless-woocommerce-with-nextjs"
}

export function BlogCard({ blog }: { blog: Blog }) {
  // Normalize leading slash to avoid double slashes when linking to /blog/{href}
  const normalized = blog.href.replace(/^\/+/, "")
  const to = `/${normalized}`

  return (
    <article>
      <Link
        href={to}
        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
      >
        <Card className="transition-colors border-border hover:border-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground text-balance group-hover:text-primary transition-colors">
              {blog.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">{blog.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Read article
              <span aria-hidden="true">→</span>
            </span>
            <span className="sr-only">{`Read ${blog.title}`}</span>
          </CardContent>
        </Card>
      </Link>
    </article>
  )
}
