"use client";

import React, { useState } from "react";
import {
  Layers,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Sparkles,
  Zap,
  Gift,
  Truck,
  ArrowRight,
  TrendingUp,
  Percent,
} from "lucide-react";

type BundleProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
};

const BUNDLE_CATALOG: BundleProduct[] = [
  {
    id: "p1",
    name: "AlphaHydrate Clear Whey Isolate (Peach Mango)",
    category: "Isolate Protein",
    price: 39.0,
    originalPrice: 45.0,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "ArcticWhey Isolate Vanilla Bean (3lb)",
    category: "Isolate Protein",
    price: 52.0,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "GreenLife Organic Pea Protein (Unflavored)",
    category: "Plant-Based",
    price: 28.0,
    originalPrice: 32.0,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "KetoFuel Whey + MCT Oil (Vanilla Ice Cream)",
    category: "Keto & Performance",
    price: 45.0,
    originalPrice: 52.0,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "HydroGlow Collagen Peptides (Unflavored 1lb)",
    category: "Recovery & Joints",
    price: 28.0,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: "p6",
    name: "IronFlow Hemp Power Seed Powder (1lb)",
    category: "Superfood",
    price: 22.0,
    originalPrice: 25.0,
    image: "https://images.unsplash.com/photo-1574689211272-bc14e289e223?q=80&w=300&auto=format&fit=crop",
  },
];

export function BundleBuilderSimulator() {
  const [selectedItems, setSelectedItems] = useState<{ [id: string]: number }>({
    p2: 1, // ArcticWhey
    p3: 1, // GreenLife Pea Protein
    p4: 1, // KetoFuel
  });

  const handleAdd = (id: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id: string) => {
    setSelectedItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const handleClear = () => {
    setSelectedItems({});
  };

  const selectedList = Object.entries(selectedItems).map(([id, qty]) => {
    const product = BUNDLE_CATALOG.find((p) => p.id === id)!;
    return { ...product, qty };
  });

  const totalCount = Object.values(selectedItems).reduce((sum, q) => sum + q, 0);
  const subtotal = selectedList.reduce((sum, item) => sum + item.price * item.qty, 0);
  const isDiscountEligible = totalCount >= 3;
  const discountAmount = isDiscountEligible ? subtotal * 0.15 : 0;
  const finalTotal = subtotal - discountAmount;

  return (
    <div className="w-full bg-[var(--sf-paper)] border-2 border-[var(--sf-ink)] shadow-[8px_8px_0_var(--sf-ink)] overflow-hidden">
      {/* Header Bar */}
      <div className="bg-[var(--sf-ink)] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[var(--sf-primary)]" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--sf-paper-sunken)]">
            Custom Stack Builder UX • Live Architecture Simulation
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Multi-SKU Cart API
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Side: Product Selector Matrix */}
        <div className="lg:col-span-7 p-5 md:p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--sf-ink)] bg-white space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--sf-ink-mute)]/30">
            <div>
              <h3 className="text-base md:text-lg font-black text-[var(--sf-ink)] tracking-tight">
                Select Your Custom Supplement Stack
              </h3>
              <p className="text-xs text-[var(--sf-ink-mute)]">
                Add 3+ items to unlock an instant 15% bundle discount
              </p>
            </div>
            {isDiscountEligible && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-bold bg-[var(--sf-sage-soft)] text-[var(--sf-sage-deep)] border border-[var(--sf-sage)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--sf-sage)]" />
                15% Stack Discount Active
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[480px] overflow-y-auto pr-1">
            {BUNDLE_CATALOG.map((prod) => {
              const qty = selectedItems[prod.id] || 0;
              const isSelected = qty > 0;
              return (
                <div
                  key={prod.id}
                  className={`p-3 border-2 transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-[var(--sf-paper-sunken)] border-[var(--sf-ink)] shadow-[3px_3px_0_var(--sf-ink)]"
                      : "bg-white border-[var(--sf-ink-mute)]/40 hover:border-[var(--sf-ink)]"
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[var(--sf-primary)] uppercase block mb-1">
                      {prod.category}
                    </span>
                    <h4 className="text-xs font-bold text-[var(--sf-ink)] leading-snug mb-2 line-clamp-2">
                      {prod.name}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[var(--sf-ink-mute)]/20 mt-2">
                    <div className="font-mono text-xs">
                      <span className="font-black text-[var(--sf-ink)]">
                        ${prod.price.toFixed(2)}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-[10px] text-[var(--sf-ink-mute)] line-through ml-1.5">
                          ${prod.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {isSelected ? (
                      <div className="flex items-center gap-1.5 bg-[var(--sf-ink)] text-white px-2 py-1 text-xs font-mono font-bold">
                        <button
                          onClick={() => handleRemove(prod.id)}
                          className="hover:text-[var(--sf-primary)] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-1.5">{qty}</span>
                        <button
                          onClick={() => handleAdd(prod.id)}
                          className="hover:text-[var(--sf-primary)] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAdd(prod.id)}
                        className="px-2.5 py-1 bg-[var(--sf-ink)] text-white text-xs font-mono font-bold hover:bg-[var(--sf-primary)] transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Sticky Bundle Drawer State */}
        <div className="lg:col-span-5 p-5 md:p-6 bg-[var(--sf-paper-sunken)] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b-2 border-[var(--sf-ink)]">
              <div>
                <h3 className="text-base font-black text-[var(--sf-ink)] flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[var(--sf-primary)]" />
                  Your Bundle ({totalCount} items)
                </h3>
              </div>
              {totalCount > 0 && (
                <button
                  onClick={handleClear}
                  className="text-xs font-mono text-[var(--sf-primary-deep)] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  Clear
                </button>
              )}
            </div>

            <div className="mt-3 space-y-2 max-h-[300px] overflow-y-auto">
              {selectedList.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-[var(--sf-ink-mute)] border-2 border-dashed border-[var(--sf-ink-mute)]/40">
                  Select products from the catalog to build your custom stack.
                </div>
              ) : (
                selectedList.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-white border border-[var(--sf-ink)] flex items-center justify-between text-xs gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[var(--sf-ink)] truncate">
                        {item.name}
                      </div>
                      <div className="text-[11px] font-mono text-[var(--sf-ink-soft)]">
                        ${item.price.toFixed(2)} × {item.qty}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[var(--sf-ink)]">
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-[var(--sf-ink-mute)] hover:text-red-600 p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="space-y-3 pt-3 border-t-2 border-dashed border-[var(--sf-ink)]">
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-[var(--sf-ink-soft)]">
                <span>Subtotal ({totalCount} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {isDiscountEligible && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Bundle Tier Discount (-15%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-black text-[var(--sf-ink)] pt-1 border-t border-[var(--sf-ink-mute)]/30">
                <span>Bundle Total</span>
                <span className="text-base text-[var(--sf-primary)]">
                  ${finalTotal.toFixed(2)} USD
                </span>
              </div>
            </div>

            <button className="w-full py-3 bg-[var(--sf-ink)] text-white text-xs font-mono font-bold uppercase tracking-wider border-2 border-[var(--sf-ink)] shadow-[4px_4px_0_var(--sf-primary)] hover:bg-[var(--sf-primary)] transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TieredCartSimulator() {
  const [cartTotal, setCartTotal] = useState<number>(104.4);

  const tiers = [
    { threshold: 50, label: "Free Shipping", icon: Truck },
    { threshold: 100, label: "Ghoststrike Alpha Pre-Workout", icon: Zap },
    { threshold: 200, label: "Ironclad Micronized Creatine", icon: Gift },
  ];

  const currentTierIndex = tiers.findIndex((t) => cartTotal < t.threshold);
  const nextTier =
    currentTierIndex !== -1 ? tiers[currentTierIndex] : null;
  const remaining = nextTier ? nextTier.threshold - cartTotal : 0;
  const progressPercent = Math.min(100, (cartTotal / 200) * 100);

  return (
    <div className="w-full bg-[#111] text-white border-2 border-[var(--sf-ink)] shadow-[8px_8px_0_var(--sf-ink)] p-6 md:p-8">
      {/* Top Banner with dynamic tier status */}
      <div className="text-center pb-6 border-b border-neutral-800">
        {nextTier ? (
          <div className="inline-block">
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[var(--sf-primary)] block mb-1">
              Tiered Reward Milestone
            </span>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">
              Only ${remaining.toFixed(2)} USD Left to Get Free {nextTier.label}!
            </h3>
          </div>
        ) : (
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-400 block mb-1">
              Maximum Milestone Unlocked!
            </span>
            <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">
              All 3 Free Gifts Unlocked & Added to Cart!
            </h3>
          </div>
        )}

        {/* Milestone Progress Bar */}
        <div className="mt-6 relative max-w-[540px] mx-auto">
          <div className="h-2.5 bg-neutral-800 rounded-full overflow-hidden border border-neutral-700">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-[var(--sf-primary)] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4">
            {tiers.map((t, idx) => {
              const isUnlocked = cartTotal >= t.threshold;
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className={`p-2.5 border text-center transition-all ${
                    isUnlocked
                      ? "bg-neutral-900 border-emerald-500 text-white shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                      : "bg-neutral-900/50 border-neutral-800 text-neutral-400"
                  }`}
                >
                  <div
                    className={`w-7 h-7 mx-auto mb-1.5 rounded-full flex items-center justify-center border ${
                      isUnlocked
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                        : "bg-neutral-800 border-neutral-700 text-neutral-500"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] font-mono font-bold uppercase text-[var(--sf-gold)]">
                    ${t.threshold}
                  </div>
                  <div className="text-[10px] font-bold leading-tight line-clamp-2">
                    {t.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-neutral-400">
            Simulate Cart Value:
          </span>
          <div className="flex gap-2">
            {[45, 95, 140, 210].map((val) => (
              <button
                key={val}
                onClick={() => setCartTotal(val)}
                className={`px-3 py-1 text-xs font-mono font-bold border transition-all cursor-pointer ${
                  cartTotal === val
                    ? "bg-[var(--sf-primary)] border-white text-white"
                    : "bg-neutral-800 border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                ${val}
              </button>
            ))}
          </div>
        </div>

        <div className="font-mono text-xs text-right">
          <span className="text-neutral-400 block">Active Cart Value:</span>
          <span className="text-lg font-black text-white">
            ${cartTotal.toFixed(2)} USD
          </span>
        </div>
      </div>
    </div>
  );
}
