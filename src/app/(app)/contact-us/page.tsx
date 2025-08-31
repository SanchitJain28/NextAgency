import Link from "next/link";
// If your project has a Button at '@/components/ui/button', keep this import.
// If not, the fallback <a> elements below are fully styled buttons.
import { Button } from "@/components/ui/button";
import Header from "@/components/header-footer/Header";
import { MovingReviews } from "@/components/reviews/MovingReviews";
import Footer from "@/components/header-footer/Footer";

const PHONE_E164 = "919650296375"; // E.164 without '+' for wa.me
const DISPLAY_PHONE = "+919650296375";
const TEL_INTERNATIONAL = "+919650296375";

function WhatsAppButtons() {
  const waBase = `https://wa.me/${PHONE_E164}`;
  const waPrefilled = `${waBase}?text=${encodeURIComponent(
    "Hi! I came from your website and would like to chat."
  )}`;
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Button 1: plain WhatsApp chat */}
      <Button asChild className="bg-[#F97316] hover:bg-[#ea6a10] text-white">
        <a
          href={waBase}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp me"
        >
          WhatsApp Us
        </a>
      </Button>

      {/* Button 2: pre-filled WhatsApp message */}
      <Button asChild className="bg-[#F97316] hover:bg-[#ea6a10] text-white">
        <a
          href={waPrefilled}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp me with pre-filled message"
        >
          WhatsApp Us (with message)
        </a>
      </Button>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-[60vh]  bg-white text-[#333333]">
      <Header />
      <section className="mx-auto w-full max-w-xl px-4 py-12">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-balance">Contact Us</h1>
          <div className="mt-2 h-1 w-16 bg-[#16A34A]" aria-hidden="true" />
        </header>

        <div className="rounded-lg border border-[#F1F5F9] p-6">
          <dl className="space-y-4">
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-[#333333]/70">Phone</dt>
              <dd>
                <Link
                  href={`tel:${TEL_INTERNATIONAL}`}
                  className="font-medium text-[#333333] underline-offset-4 hover:underline"
                >
                  {DISPLAY_PHONE}
                </Link>
              </dd>
            </div>

            <div className="flex flex-col gap-1">
              <dt className="text-sm text-[#333333]/70">WhatsApp</dt>
              <dd>
                <Link
                  href={`https://wa.me/${PHONE_E164}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#333333] underline-offset-4 hover:underline"
                >
                  {DISPLAY_PHONE}
                </Link>
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <WhatsAppButtons />
          </div>

          <p className="mt-6 text-sm text-[#333333]/70">
            We typically respond quickly on WhatsApp. For best results, include
            your name and a brief note.
          </p>
        </div>
      </section>
      <div className="pb-12">
        <MovingReviews />
      </div>

      <Footer/>
    </main>
  );
}
