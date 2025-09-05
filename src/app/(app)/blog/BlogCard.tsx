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
        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-lg"
      >
        <Card className="transition-colors border-[#F1F5F9] hover:border-[#16A34A]">
          <CardHeader className="pb-2">
            <CardTitle className="text-[#333333] text-balance group-hover:text-[#16A34A] transition-colors">
              {blog.title}
            </CardTitle>
            <CardDescription className="text-[#333333]/80">{blog.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316]">
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
