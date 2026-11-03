"use client";

import { useId, useRef, type FormEvent } from "react";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { useContact } from "@/hooks/useContact";
import { useGeo } from "@/hooks/useGeo";
import styles from "./ProjectInquirySheet.module.css";

type ProjectInquirySheetProps = {
  triggerLabel: string;
  className?: string;
  title: string;
  description: string;
  projectTypes: readonly string[];
  detailsPrompt: string;
  source?: string;
};

const fieldClass =
  "mt-1 block w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-base text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

export function ProjectInquirySheet({
  triggerLabel,
  className,
  title,
  description,
  projectTypes,
  detailsPrompt,
  source,
}: ProjectInquirySheetProps) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const { isIndia } = useGeo();
  const { submitContact, isSubmitting, isSuccess, error, email, telInternational, waPrefilled, reset } =
    useContact();
  const budgets = isIndia
    ? [
        "Under ₹25,000",
        "₹25,000–₹40,000",
        "₹40,000–₹80,000",
        "₹80,000–₹1,60,000",
        "Above ₹1,60,000",
      ]
    : [
        "Under $300",
        "$300–$500",
        "$500–$1,000",
        "$1,000–$2,000",
        "Above $2,000",
      ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    const form = new FormData(event.currentTarget);
    const read = (key: string) => String(form.get(key) ?? "").trim();
    for (const key of ["details", "name"]) {
      if (read(key)) continue;
      const field = event.currentTarget.elements.namedItem(key) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      field.value = "";
      field.reportValidity();
      return;
    }
    const message = [
      read("details"),
      read("timeline") && `Timeline: ${read("timeline")}`,
      source && `Source: ${source}`,
    ]
      .filter(Boolean)
      .join("\n\n");
    try {
      await submitContact({
        name: read("name"),
        email: read("email"),
        projectType: read("projectType") || undefined,
        budget: read("budget") || undefined,
        message,
      });
    } catch {}
  }

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        aria-controls={id}
        className={className}
        onClick={() => dialog.current?.showModal()}
      >
        {triggerLabel}
      </button>
      <dialog
        ref={dialog}
        id={id}
        aria-labelledby={`${id}-title`}
        className={styles.sheet}
        onClose={() => {
          trigger.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (
            event.target === event.currentTarget &&
            event.clientX < event.currentTarget.getBoundingClientRect().left
          ) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="flex items-start justify-between gap-5 border-b border-neutral-200 p-5 sm:p-7">
          <div>
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-600">
              Scalefront services
            </p>
            <h2
              id={`${id}-title`}
              className="text-2xl font-bold tracking-tight"
            >
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {description}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close inquiry"
            onClick={() => dialog.current?.close()}
            className="grid size-10 shrink-0 place-items-center rounded-md border border-neutral-300 hover:bg-neutral-100 focus-visible:outline-2"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 sm:p-7">
          {isSuccess ? (
            <div
              role="status"
              className="rounded-md border border-neutral-200 bg-neutral-50 p-5"
            >
              <p className="font-semibold">Thanks, we received your inquiry.</p>
              <p className="mt-2 text-sm text-neutral-600">
                We’ll review your project and reply by email.
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-medium underline"
                onClick={reset}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-sm font-medium">
                What do you need?
                <select
                  name="projectType"
                  className={fieldClass}
                  defaultValue=""
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Estimated budget
                  <select name="budget" className={fieldClass} defaultValue="">
                    <option value="">Select a range</option>
                    {budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="block text-sm font-medium">
                  Target timeline
                  <select
                    name="timeline"
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="">Select a timeline</option>
                    <option>Within 2 weeks</option>
                    <option>Within a month</option>
                    <option>1–3 months</option>
                    <option>Flexible / exploring</option>
                  </select>
                </label>
              </div>
              <label className="block text-sm font-medium">
                Project details
                <textarea
                  name="details"
                  required
                  rows={4}
                  maxLength={3000}
                  className={fieldClass}
                  placeholder={detailsPrompt}
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Name
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={120}
                    className={fieldClass}
                  />
                </label>
                <label className="block text-sm font-medium">
                  Email
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className={fieldClass}
                  />
                </label>
              </div>
              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-700 disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send project inquiry"}
              </button>
            </form>
          )}
          <div className="mt-5 border-t border-neutral-200 pt-4">
            <p className="mb-3 text-sm text-neutral-600">Prefer to contact us directly?</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Call", href: `tel:${telInternational}`, Icon: Phone },
                { label: "WhatsApp", href: waPrefilled, Icon: MessageCircle },
                { label: "Email", href: `mailto:${email}`, Icon: Mail },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex min-h-11 flex-wrap items-center justify-center gap-1.5 rounded-md border border-neutral-300 px-1.5 py-2 text-center text-sm font-medium text-neutral-900 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <Icon size={16} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
