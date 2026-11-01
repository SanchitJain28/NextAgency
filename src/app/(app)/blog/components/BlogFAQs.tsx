"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/lib/blog/posts";
import styles from "./BlogFAQs.module.css";

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={styles.item} data-open={open}>
      <h3 className={styles.question}>
        <button
          type="button"
          id={`${id}-question`}
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen(!open)}
          className={styles.trigger}
        >
          <span className={styles.number} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={styles.label}>{faq.question}</span>
          <span className={styles.icon} aria-hidden="true"><Plus size={18} /></span>
        </button>
      </h3>
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        aria-hidden={!open}
        inert={!open}
        className={styles.panel}
      >
        <div className={styles.clip}>
          <div className={styles.answer}>
            {faq.answer.split(/\n\s*\n/).map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogFAQs({ faqs }: { faqs: FAQ[] }) {
  if (faqs.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="blog-faq-heading">
      <div className={styles.eyebrow}>Questions &amp; answers</div>
      <h2 id="blog-faq-heading" className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.list}>
        {faqs.map((faq, index) => <FAQItem key={faq.question} faq={faq} index={index} />)}
      </div>
    </section>
  );
}
