"use client";

import React, { useState } from "react";
import {
  Layers,
  Calculator,
  FileSpreadsheet,
  CheckCircle2,
  Sliders,
  FileDown,
  ShieldCheck,
  Package,
  Wrench,
  ArrowRight,
  Building2,
  FileCheck,
  TrendingDown,
} from "lucide-react";

export function IndustrialSpecViewer() {
  const [activeTab, setActiveTab] = useState<
    "mechanical" | "material" | "dimensions" | "logistics"
  >("mechanical");

  const tabData = {
    mechanical: [
      {
        label: "Tensile Strength (Yield)",
        value: "620 MPa (89.9 ksi)",
        status: "Verified ASTM A193",
      },
      {
        label: "Torque Rating (Max)",
        value: "320 N·m (236 lbf·ft)",
        status: "ISO 898-1 Class 10.9",
      },
      {
        label: "Operating Temperature",
        value: "-196°C to +400°C (-320°F to +752°F)",
        status: "Cryogenic Rated",
      },
      {
        label: "Thread Standard",
        value: "UNC / UNF Class 2A / 2B Fit",
        status: "ASME B1.1 Compliant",
      },
      {
        label: "Hardness Rating",
        value: "Rockwell C 32–39 (HRC)",
        status: "NACE MR0175 Compliant",
      },
    ],
    material: [
      {
        label: "Base Alloy",
        value: "Grade 316 / 316L Stainless Steel",
        status: "Dual Certified",
      },
      {
        label: "Corrosion Resistance",
        value: "PREN ≥ 25 (Pitting Resistance)",
        status: "Marine Grade",
      },
      {
        label: "Surface Passivation",
        value: "ASTM A967 Citric / Nitric Acid Treatment",
        status: "Zero Free-Iron Residue",
      },
      {
        label: "Traceability",
        value: "EN 10204 3.1 Mill Test Certificate (MTR)",
        status: "Batch Heat-Lot Tracked",
      },
      {
        label: "Environmental Compliance",
        value: "RoHS 3 (EU 2015/863) & REACH",
        status: "Conflict-Free Sourced",
      },
    ],
    dimensions: [
      {
        label: "Nominal Diameter Range",
        value: 'M6 through M36 (1/4" to 1-1/2")',
        status: "Precision CNC Turned",
      },
      {
        label: "Shank Tolerance",
        value: "ISO h9 / ASME B18.2.1",
        status: "High Tolerance",
      },
      {
        label: "Grip Length Options",
        value: "25mm to 300mm in 5mm increments",
        status: "Full & Partial Thread",
      },
      {
        label: "CAD / BIM Availability",
        value: "STEP (.stp), IGES (.igs), SolidWorks (.sldprt)",
        status: "1-Click Download",
      },
      {
        label: "2D Spec Sheet",
        value: "Vector PDF with dimensional tolerances",
        status: "Printable PDF Available",
      },
    ],
    logistics: [
      {
        label: "Master Pack Packaging",
        value: "Corrugated Box with VCI Vapor Barrier",
        status: "Moisture Protected",
      },
      {
        label: "Pallet Quantity (MOQ)",
        value: "12 Master Cartons (approx. 2,400 units)",
        status: "ISPM 15 Heat-Treated Pallet",
      },
      {
        label: "Customs / HS Tariff Code",
        value: "7318.15.2000 (Industrial Threaded Fasteners)",
        status: "Automated Commercial Invoice",
      },
      {
        label: "Lead Time (Standard)",
        value: "24–48 Hours Dispatch from Regional Hubs",
        status: "In-Stock Guarantee",
      },
      {
        label: "Custom Fabrication Lead",
        value: "10–14 Business Days (Custom Alloys)",
        status: "Express Freight Eligible",
      },
    ],
  };

  return (
    <div className="w-full bg-white border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] overflow-hidden">
      {/* Header Bar */}
      <div className="bg-[var(--sf-ink)] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Layers className="w-4 h-4 text-[var(--sf-primary)]" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-paper-sunken)]">
            Native Metaobject Data Model • Product Spec Matrix
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Liquid Rendered (0.004s TTFB)
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b-2 border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)]">
        {[
          { key: "mechanical", label: "Mechanical & Torque", icon: Wrench },
          {
            key: "material",
            label: "Material & Compliance",
            icon: ShieldCheck,
          },
          {
            key: "dimensions",
            label: "Dimensions & CAD",
            icon: FileSpreadsheet,
          },
          { key: "logistics", label: "Packaging & Logistics", icon: Package },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-bold transition-all cursor-pointer border-r-2 border-[var(--sf-ink)] last:border-r-0 ${
                isActive
                  ? "bg-white text-[var(--sf-ink)] shadow-inner border-b-2 border-b-white -mb-[2px]"
                  : "bg-transparent text-[var(--sf-ink-soft)] hover:bg-white/60"
              }`}
            >
              <Icon
                className={`w-4 h-4 ${isActive ? "text-[var(--sf-primary)]" : "text-[var(--sf-ink-mute)]"}`}
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Spec Table */}
      <div className="p-4 md:p-6 bg-white overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-[var(--sf-ink)] text-xs font-mono text-[var(--sf-ink-mute)] uppercase tracking-wider">
              <th className="pb-3 pr-4 font-bold">Specification Parameter</th>
              <th className="pb-3 px-4 font-bold">Engineered Value</th>
              <th className="pb-3 pl-4 font-bold text-right">
                Standard / Verification
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--sf-paper-sunken)]">
            {tabData[activeTab].map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-[var(--sf-paper-sunken)]/60 transition-colors group"
              >
                <td className="py-3.5 pr-4 font-semibold text-[var(--sf-ink)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--sf-primary)] rounded-full group-hover:scale-125 transition-transform" />
                  {row.label}
                </td>
                <td className="py-3.5 px-4 font-mono text-[var(--sf-ink)] font-medium">
                  {row.value}
                </td>
                <td className="py-3.5 pl-4 text-right">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold bg-[var(--sf-sage-soft)] text-[var(--sf-sage-deep)] border border-[var(--sf-sage)]">
                    <CheckCircle2 className="w-3 h-3 text-[var(--sf-sage)]" />
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CAD Download Mock Action */}
        {activeTab === "dimensions" && (
          <div className="mt-5 p-4 bg-[var(--sf-paper-sunken)] border-2 border-dashed border-[var(--sf-ink-mute)] flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[var(--sf-ink)]">
                3D CAD Model & Specification Sheet Downloads
              </p>
              <p className="text-xs text-[var(--sf-ink-mute)]">
                Available in universal engineering formats with native
                parametric data
              </p>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[var(--sf-ink)] text-xs font-mono font-bold text-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)]">
                <FileDown className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
                .STEP (4.2 MB)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[var(--sf-ink)] text-xs font-mono font-bold text-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)]">
                <FileDown className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
                Spec Sheet (PDF)
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function VolumePricingCalculator() {
  const [quantity, setQuantity] = useState<number>(250);

  const pricingTiers = [
    { min: 1, max: 49, unitPrice: 48.5, discount: 0, label: "Sample / Pilot" },
    {
      min: 50,
      max: 249,
      unitPrice: 41.2,
      discount: 15,
      label: "Small Batch Tier",
    },
    {
      min: 250,
      max: 999,
      unitPrice: 34.9,
      discount: 28,
      label: "Wholesale Tier",
    },
    {
      min: 1000,
      max: 5000,
      unitPrice: 28.1,
      discount: 42,
      label: "Industrial Enterprise",
    },
  ];

  const currentTier =
    pricingTiers.find((t) => quantity >= t.min && quantity <= t.max) ||
    pricingTiers[pricingTiers.length - 1];

  const basePrice = pricingTiers[0].unitPrice;
  const totalPrice = (quantity * currentTier.unitPrice).toFixed(2);
  const regularPrice = (quantity * basePrice).toFixed(2);
  const totalSavings = (
    parseFloat(regularPrice) - parseFloat(totalPrice)
  ).toFixed(2);

  return (
    <div className="w-full bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[var(--sf-ink)]">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1">
            <Calculator className="w-4 h-4" />
            Live Client-Side Pricing Engine
          </div>
          <h3 className="text-xl md:text-2xl font-black text-[var(--sf-ink)] tracking-tight">
            Tiered Volume Pricing Simulation
          </h3>
        </div>
        <div className="text-xs font-mono bg-white px-3 py-1.5 border border-[var(--sf-ink)] text-[var(--sf-ink-soft)]">
          Auto-applies in Cart • No Coupon Codes Needed
        </div>
      </div>

      {/* Tier Breakdown Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {pricingTiers.map((tier, idx) => {
          const isSelected =
            quantity >= tier.min && (tier.max ? quantity <= tier.max : true);
          return (
            <div
              key={idx}
              onClick={() => setQuantity(tier.min)}
              className={`p-3.5 border-2 transition-all cursor-pointer ${
                isSelected
                  ? "bg-white border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-ink)] -translate-y-1"
                  : "bg-white/50 border-[var(--sf-ink-mute)]/40 hover:bg-white hover:border-[var(--sf-ink)]"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-mono font-bold text-[var(--sf-ink-mute)] uppercase">
                  {tier.min}–{tier.max === 5000 ? "5,000+" : tier.max} Units
                </span>
                {tier.discount > 0 && (
                  <span className="text-[10px] font-mono font-extrabold px-1.5 py-0.5 bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] border border-[var(--sf-primary)]">
                    -{tier.discount}%
                  </span>
                )}
              </div>
              <div className="text-lg font-black text-[var(--sf-ink)] font-mono">
                ${tier.unitPrice.toFixed(2)}
                <span className="text-xs font-normal text-[var(--sf-ink-soft)]">
                  /ea
                </span>
              </div>
              <div className="text-[11px] font-semibold text-[var(--sf-ink-soft)] mt-0.5">
                {tier.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Slider & Quantity Controller */}
      <div className="bg-white border-2 border-[var(--sf-ink)] p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <label className="text-sm font-bold text-[var(--sf-ink)] flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[var(--sf-primary)]" />
            Adjust Procurement Quantity:
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 50))}
              className="w-8 h-8 font-mono font-bold border border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-[var(--sf-gold-soft)] active:translate-y-0.5"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="5000"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-24 px-3 py-1 text-center font-mono font-bold text-sm border-2 border-[var(--sf-ink)] bg-white text-[var(--sf-ink)] focus:outline-none"
            />
            <button
              onClick={() => setQuantity(Math.min(5000, quantity + 50))}
              className="w-8 h-8 font-mono font-bold border border-[var(--sf-ink)] bg-[var(--sf-paper-sunken)] hover:bg-[var(--sf-gold-soft)] active:translate-y-0.5"
            >
              +
            </button>
            <span className="text-xs font-mono font-bold text-[var(--sf-ink-soft)] ml-1">
              Units
            </span>
          </div>
        </div>

        <input
          type="range"
          min="1"
          max="1500"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-full accent-[var(--sf-primary)] cursor-pointer h-2 bg-[var(--sf-paper-sunken)] border border-[var(--sf-ink)]"
        />

        {/* Calculation Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t-2 border-dashed border-[var(--sf-ink-mute)]">
          <div>
            <span className="text-[11px] font-mono text-[var(--sf-ink-mute)] uppercase block">
              Active Unit Price
            </span>
            <span className="text-xl font-black text-[var(--sf-primary)] font-mono">
              ${currentTier.unitPrice.toFixed(2)}
            </span>
            {currentTier.discount > 0 && (
              <span className="text-[11px] text-[var(--sf-ink-mute)] line-through ml-2 font-mono">
                ${basePrice.toFixed(2)}
              </span>
            )}
          </div>

          <div>
            <span className="text-[11px] font-mono text-[var(--sf-ink-mute)] uppercase block">
              Total Order Value
            </span>
            <span className="text-xl font-black text-[var(--sf-ink)] font-mono">
              $
              {parseFloat(totalPrice).toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-mono text-[var(--sf-ink-mute)] uppercase block">
              Wholesale Savings
            </span>
            <span className="text-xl font-black text-emerald-600 font-mono flex items-center gap-1">
              <TrendingDown className="w-4 h-4" />$
              {parseFloat(totalSavings).toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RFQFlowDemo() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="w-full bg-white border-2 border-[var(--sf-ink)] shadow-[6px_6px_0_var(--sf-ink)] p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b-2 border-[var(--sf-ink)]">
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--sf-primary)] mb-1">
            Procurement Workflow Architecture
          </div>
          <h3 className="text-xl md:text-2xl font-black text-[var(--sf-ink)] tracking-tight">
            Hybrid Checkout & RFQ (Request for Quote) Funnel
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3].map((step) => (
            <button
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`w-7 h-7 text-xs font-mono font-bold border-2 border-[var(--sf-ink)] transition-all ${
                currentStep === step
                  ? "bg-[var(--sf-primary)] text-white shadow-[2px_2px_0_var(--sf-ink)] -translate-y-0.5"
                  : "bg-[var(--sf-paper-sunken)] text-[var(--sf-ink)] hover:bg-white"
              }`}
            >
              0{step}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7 space-y-4">
          {currentStep === 1 && (
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold bg-[var(--sf-gold-soft)] text-[var(--sf-ink)] border border-[var(--sf-ink)]">
                Step 1 of 3 • Custom SKU & Quantity Specification
              </span>
              <h4 className="text-lg font-bold text-[var(--sf-ink)]">
                Structured Spec Capture directly from the Product Page
              </h4>
              <p className="text-sm text-[var(--sf-ink-soft)] leading-relaxed">
                Rather than asking procurement managers to type freeform text
                into an email, the RFQ funnel pre-populates verified alloy
                grades, tolerance limits, and target quantities directly from
                the active Metaobject context.
              </p>
              <ul className="text-xs font-medium space-y-2 text-[var(--sf-ink-soft)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--sf-sage)] shrink-0" />
                  Instant parsing of batch size and delivery schedule (single
                  drop vs. blanket purchase order).
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--sf-sage)] shrink-0" />
                  Direct file upload for proprietary CAD (.stp / .dxf)
                  blueprints.
                </li>
              </ul>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold bg-[var(--sf-primary-soft)] text-[var(--sf-primary-deep)] border border-[var(--sf-primary)]">
                Step 2 of 3 • Enterprise Entity & Tax Compliance
              </span>
              <h4 className="text-lg font-bold text-[var(--sf-ink)]">
                Company Verification & Tax Exemption Handling
              </h4>
              <p className="text-sm text-[var(--sf-ink-soft)] leading-relaxed">
                Captures enterprise GSTIN / VAT ID, DUNS number, and resale tax
                exemption certificates upfront. Automates enterprise customer
                tagging in Shopify Admin for Net 30/60 invoice terms.
              </p>
              <ul className="text-xs font-medium space-y-2 text-[var(--sf-ink-soft)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--sf-sage)] shrink-0" />
                  Automated customer account matching against existing B2B
                  company profiles.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--sf-sage)] shrink-0" />
                  Real-time tax certificate verification flow to bypass retail
                  sales tax.
                </li>
              </ul>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold bg-[var(--sf-sage-soft)] text-[var(--sf-sage-deep)] border border-[var(--sf-sage)]">
                Step 3 of 3 • Automated ERP & CRM Quotation Dispatch
              </span>
              <h4 className="text-lg font-bold text-[var(--sf-ink)]">
                Direct Sync to Sales Engineering & Shopify Draft Orders
              </h4>
              <p className="text-sm text-[var(--sf-ink-soft)] leading-relaxed">
                When submitted, the quote request instantly generates a Shopify
                Draft Order with custom negotiated pricing and triggers a
                webhook payload into the merchant's ERP/CRM (HubSpot, SAP, or
                NetSuite).
              </p>
              <ul className="text-xs font-medium space-y-2 text-[var(--sf-ink-soft)]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--sf-sage)] shrink-0" />
                  1-Click quote approval email sent to buyer with locked-in Net
                  Terms checkout link.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--sf-sage)] shrink-0" />
                  Zero phone tag or manual re-entry required by the merchant
                  sales team.
                </li>
              </ul>
            </div>
          )}

          <div className="pt-2 flex gap-3">
            <button
              onClick={() =>
                setCurrentStep(currentStep === 3 ? 1 : currentStep + 1)
              }
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--sf-ink)] text-white text-xs font-mono font-bold border-2 border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-primary)] hover:bg-[var(--sf-primary)] transition-all cursor-pointer"
            >
              <span>
                {currentStep === 3
                  ? "Reset Demo Flow"
                  : "Next Architecture Step"}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* UI Mock Preview Box */}
        <div className="lg:col-span-5 bg-[var(--sf-paper-sunken)] border-2 border-[var(--sf-ink)] p-4 shadow-[4px_4px_0_var(--sf-ink)]">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--sf-ink-mute)]/40 text-xs font-mono text-[var(--sf-ink-mute)]">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[var(--sf-primary)]" />
              RFQ Drawer Prototype
            </span>
            <span>Step 0{currentStep}/03</span>
          </div>

          <div className="py-4 space-y-3">
            {currentStep === 1 && (
              <>
                <div className="p-2.5 bg-white border border-[var(--sf-ink)] text-xs font-mono">
                  <div className="font-bold text-[var(--sf-ink)]">
                    SKU: IND-316-M16-FLG
                  </div>
                  <div className="text-[var(--sf-ink-mute)] text-[11px]">
                    Stainless Steel Flange Bolt • Custom Batch: 2,500 pcs
                  </div>
                </div>
                <div className="p-2.5 bg-white border border-dashed border-[var(--sf-ink)] text-xs flex items-center justify-between text-[var(--sf-ink-soft)]">
                  <span>Blueprint Attachment</span>
                  <span className="font-mono text-[11px] font-bold text-[var(--sf-primary)]">
                    shaft-spec-v2.stp
                  </span>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="p-2.5 bg-white border border-[var(--sf-ink)] text-xs space-y-1">
                  <div className="text-[10px] font-mono text-[var(--sf-ink-mute)] uppercase">
                    Company Entity
                  </div>
                  <div className="font-bold text-[var(--sf-ink)]">
                    Apex Precision Manufacturing Ltd.
                  </div>
                </div>
                <div className="p-2.5 bg-white border border-[var(--sf-ink)] text-xs flex items-center justify-between">
                  <span className="text-[11px] font-mono">
                    Tax Exemption Cert:
                  </span>
                  <span className="font-mono text-emerald-600 font-bold text-[11px]">
                    VERIFIED (EX-9482)
                  </span>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div className="p-3 bg-emerald-50 border border-emerald-500 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    Draft Order #DO-8849 Generated
                  </div>
                  <p className="text-[11px] text-emerald-700 leading-snug">
                    Price locked at $26.40/unit. Invoice dispatched to AP
                    department with Net-45 term payment link.
                  </p>
                </div>
              </>
            )}

            <div className="w-full py-2 bg-[var(--sf-primary)] text-white text-center text-xs font-mono font-bold border border-[var(--sf-ink)] shadow-[2px_2px_0_var(--sf-ink)]">
              {currentStep === 3
                ? "Quote Finalized & Synchronized"
                : "Proceed to Next Verification"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
