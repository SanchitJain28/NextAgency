import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--sf-ink)] bg-[var(--sf-paper)]">
      <div className="max-w-[1200px] mx-auto px-7 py-10 flex justify-between items-center gap-6 flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-[11px] text-[20px] tracking-[-0.02em] text-[var(--sf-ink)]"
          style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 800,
          }}
        >
          <span
            className="w-7 h-7"
            style={{
              background:
                "linear-gradient(140deg, var(--sf-primary), var(--sf-berry))",
            }}
          />
          Scale<span style={{ color: "var(--sf-primary)" }}>front</span>
        </Link>
        <div className="text-[14px] text-[var(--sf-ink-mute)]">
          © {new Date().getFullYear()} Scalefront Studio · Crafted for merchants
          who mean it.
        </div>
        <div className="flex gap-5 text-[14px]">
          <Link
            href="/work"
            className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)] font-medium"
          >
            Work
          </Link>
          <Link
            href="/#services"
            className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]"
          >
            Services
          </Link>
          <Link
            href="/#pricing"
            className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]"
          >
            Pricing
          </Link>
          <Link
            href="/#contact"
            className="text-[var(--sf-ink-soft)] hover:text-[var(--sf-primary)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
