import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";

export default function AboutPage() {
  return (
    <main
      className="min-h-[60vh]"
      style={{ backgroundColor: "#FFFFFF", color: "#333333" }}
    >
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <header className="mb-6">
          <h1 className="text-pretty text-3xl font-bold md:text-4xl">
            About Us
          </h1>
          <span
            aria-hidden="true"
            className="mt-3 block h-1 w-16 rounded"
            style={{ backgroundColor: "#16A34A" }}
          />
        </header>

        <div className="flex flex-col gap-6 leading-relaxed">
          <p>
            We were tired of running a slow, unreliable e-commerce website.
            Hosting would go down, DDoS attacks would hit, the UI broke every
            now and then — and our Shopify store only made it worse. The theme
            was overloaded with features we didn’t even need (honestly, we used
            maybe 40% of it). Customers started complaining: “Why is your
            website always slow or down?”
          </p>
          <p>
            As developers, we couldn’t ignore this anymore. So, we finally made
            the switch — we built a fast, headless website.
          </p>
          <p>
            We tried Shopify, but it turned out to be less customizable and more
            expensive. A 2% cut on every sale? With limited flexibility? No
            thanks. Everything required a plugin, and while that might work for
            some, it wasn’t the solution for us.
          </p>
          <p>
            Now, our customers are happy. We can customize as much as we want,
            the checkout is smoother, upselling is seamless, and we’re even
            selling gift boxes — something we could never do smoothly on
            WordPress or Shopify. That’s the real benefit of a custom website
            built by good developers. And with today’s AI tools, it’s possible
            to achieve more with fewer resources. Honestly, it’s the perfect
            time to switch.
          </p>
        </div>

        <section
          className="mt-10 rounded-md p-6 md:p-8"
          style={{ backgroundColor: "#F1F5F9" }}
        >
          <h2 className="mb-4 text-pretty text-2xl font-semibold">Why Us?</h2>
          <div className="flex flex-col gap-6 leading-relaxed">
            <p>
              We know the exact struggles you’re facing because we’ve faced them
              too. That’s why we don’t just build websites — we solve problems.
              With 24/7 support, we’ll ensure you never have to deal with the
              same headaches again. We don’t just hand over the website and
              disappear — we maintain it for you.
            </p>
            <p>
              We’re the best people you can have on your side to make sure your
              website is fast, secure, and built to grow.
            </p>
          </div>
        </section>

        
      </div>
      <div className="pb-12">
          <MovingReviews />
        </div>
    </main>
  );
}
