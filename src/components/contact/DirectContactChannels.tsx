"use client";

import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/icons/whatsapp";
import { useContact } from "@/hooks/useContact";

export function DirectContactChannels() {
  const { displayPhone, telInternational, email, waPrefilled } = useContact();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <a
        href={waPrefilled}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366]/10 hover:bg-[#25D366]/20 border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--sf-ink)] transition-all p-5 text-center group cursor-pointer block"
      >
        <div className="w-11 h-11 mx-auto bg-[#25D366] text-white border-2 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] flex items-center justify-center mb-3">
          <WhatsAppIcon className="w-6 h-6" />
        </div>
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#128C7E] mb-1">
          FASTEST REPLY
        </div>
        <h3
          className="font-bold text-[15px] text-[var(--sf-ink)] mb-0.5 [overflow-wrap:anywhere]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          WhatsApp Chat
        </h3>
        <p className="text-[12px] text-[var(--sf-ink-soft)]">
          Live chat with team
        </p>
      </a>

      <a
        href={`mailto:${email}`}
        className="bg-[var(--sf-primary-soft)] hover:bg-[#facdc0] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--sf-ink)] transition-all p-5 text-center group cursor-pointer block"
      >
        <div className="w-11 h-11 mx-auto bg-[var(--sf-primary)] text-white border-2 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] flex items-center justify-center mb-3">
          <Mail className="w-5 h-5" />
        </div>
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--sf-primary-deep)] mb-1">
          DIRECT EMAIL
        </div>
        <h3
          className="font-bold text-[15px] text-[var(--sf-ink)] mb-0.5 [overflow-wrap:anywhere]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {email.split("@")[0]}@<wbr />{email.split("@")[1]}
        </h3>
        <p className="text-[12px] text-[var(--sf-ink-soft)]">
          Send brief or RFPs
        </p>
      </a>

      <a
        href={`tel:${telInternational}`}
        className="bg-[var(--sf-gold-soft)] hover:bg-[#fae0a5] border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_var(--sf-ink)] transition-all p-5 text-center group cursor-pointer block"
      >
        <div className="w-11 h-11 mx-auto bg-[var(--sf-gold)] text-[var(--sf-ink)] border-2 border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)] flex items-center justify-center mb-3">
          <Phone className="w-5 h-5" />
        </div>
        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--sf-ink-soft)] mb-1">
          PHONE LINE
        </div>
        <h3
          className="font-bold text-[15px] text-[var(--sf-ink)] mb-0.5 [overflow-wrap:anywhere]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {displayPhone}
        </h3>
        <p className="text-[12px] text-[var(--sf-ink-soft)]">9am - 7pm IST</p>
      </a>
    </div>
  );
}
