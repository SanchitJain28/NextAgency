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
  Search,
  Check,
  RotateCcw,
  Shield,
  Activity,
  HeartPulse,
  Tag,
  Clock,
  X,
  Lock,
} from "lucide-react";

interface BundleItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  selected: boolean;
  variant: string;
  options: string[];
  image: string;
}

const INITIAL_BUNDLE: BundleItem[] = [
  {
    id: "crampout",
    name: "CrampOut Electrolyte Tablets",
    category: "Muscle Recovery",
    price: 299.0,
    originalPrice: 499.0,
    selected: true,
    variant: "Lemon (20-Pack)",
    options: ["Lemon (20-Pack)", "Watermelon (20-Pack)", "Lemon 3-Pack", "Watermelon 3-Pack"],
    image: "/portfolio/recovrx/product/1.png",
  },
  {
    id: "kinetigrip",
    name: "KinetiGrip Massage Ball Set",
    category: "Deep Tissue",
    price: 499.0,
    originalPrice: 899.0,
    selected: true,
    variant: "3-Ball Set (Soft/Med/Firm)",
    options: ["3-Ball Set (Soft/Med/Firm)", "2-Ball High-Density Set"],
    image: "/portfolio/recovrx/home/2.png",
  },
  {
    id: "posetech",
    name: "PoseTech Posture Corrector",
    category: "Mobility & Form",
    price: 549.0,
    originalPrice: 999.0,
    selected: true,
    variant: "Size S/M (Black)",
    options: ["Size S/M (Black)", "Size L/XL (Black)"],
    image: "/portfolio/recovrx/home/4.png",
  },
  {
    id: "nexoknee",
    name: "NexoKnee Compression Sleeve",
    category: "Joint Support",
    price: 449.0,
    originalPrice: 899.0,
    selected: true,
    variant: "Size S (Single)",
    options: ["Size S (Single)", "Size M (Single)", "Size L (Single)", "Size S (Pair)", "Size M (Pair)", "Size L (Pair)"],
    image: "/portfolio/recovrx/home/3.png",
  },
];

export function BuyItWithBundleSimulator() {
  const [items, setItems] = useState<BundleItem[]>(INITIAL_BUNDLE);
  const [cartFeedback, setCartFeedback] = useState(false);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const updateVariant = (id: string, variant: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, variant } : item))
    );
  };

  const selectedItems = items.filter((i) => i.selected);
  const selectedCount = selectedItems.length;

  const rawRetailTotal = selectedItems.reduce((acc, i) => acc + i.originalPrice, 0);
  const rawBaseTotal = selectedItems.reduce((acc, i) => acc + i.price, 0);

  // Bundle logic: 10% discount when 3+ items selected, 5% when 2 items selected
  const discountRate = selectedCount >= 3 ? 0.1 : selectedCount === 2 ? 0.05 : 0;
  const bundleDiscountAmount = rawBaseTotal * discountRate;
  const finalBundlePrice = rawBaseTotal - bundleDiscountAmount;
  const totalSavings = rawRetailTotal - finalBundlePrice;

  const handleAddBundle = () => {
    setCartFeedback(true);
    setTimeout(() => setCartFeedback(false), 2400);
  };

  return (
    <div className="border-2 border-[var(--sf-ink)] bg-[#141414] text-white p-5 md:p-7 shadow-[5px_5px_0_var(--sf-ink)] rounded-none">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-neutral-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              Live Architecture Demo
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
            Native 4-Item "Buy It With" Cross-Sell Bundle
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {selectedCount >= 3 ? (
            <span className="font-mono text-xs px-3 py-1 bg-red-600 text-white font-bold border border-red-500 flex items-center gap-1.5 shadow-[2px_2px_0_#000]">
              <Sparkles className="w-3.5 h-3.5" /> 10% BUNDLE DISCOUNT APPLIED
            </span>
          ) : selectedCount === 2 ? (
            <span className="font-mono text-xs px-3 py-1 bg-amber-500 text-black font-bold border border-amber-400 flex items-center gap-1.5 shadow-[2px_2px_0_#000]">
              <Percent className="w-3.5 h-3.5" /> 5% BUNDLE DISCOUNT APPLIED
            </span>
          ) : (
            <span className="font-mono text-xs px-3 py-1 bg-neutral-800 text-neutral-400 font-mono border border-neutral-700">
              Select 2+ items to unlock bundle savings
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
        This custom Liquid 2.0 module renders a frictionless multi-SKU cross-sell section directly beneath the primary buy box. It calculates dynamic package savings in real time and submits a single multi-line cart payload via the Shopify Ajax API without third-party app scripts.
      </p>

      {/* Grid of Bundle Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`border-2 cursor-pointer transition-all duration-200 p-4 relative flex flex-col justify-between ${
              item.selected
                ? "border-red-500 bg-[#1f1f1f] shadow-[3px_3px_0_#e50914]"
                : "border-neutral-800 bg-[#171717] opacity-60 hover:opacity-85"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 bg-neutral-900 px-2 py-0.5 border border-neutral-800">
                  {item.category}
                </span>
                <div
                  className={`w-5 h-5 border flex items-center justify-center transition-colors ${
                    item.selected
                      ? "bg-red-600 border-red-500 text-white"
                      : "border-neutral-600 bg-neutral-900 text-transparent"
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>

              <h4 className="font-sans font-bold text-sm text-white mb-2 leading-tight">
                {item.name}
              </h4>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-base font-mono font-bold text-white">
                  ${item.price.toFixed(2)}
                </span>
                <span className="text-xs font-mono text-neutral-500 line-through">
                  ${item.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <div onClick={(e) => e.stopPropagation()} className="mt-3 pt-3 border-t border-neutral-800">
              <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Select Option:
              </label>
              <select
                value={item.variant}
                onChange={(e) => updateVariant(item.id, e.target.value)}
                disabled={!item.selected}
                className="w-full text-xs bg-black border border-neutral-700 text-neutral-200 px-2 py-1.5 focus:border-red-500 focus:outline-none disabled:opacity-50"
              >
                {item.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Summary & Single-Payload Add to Cart Action */}
      <div className="bg-[#1a1a1a] border-2 border-neutral-800 p-4 md:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              Bundle Total ({selectedCount} items):
            </span>
            <span className="text-2xl md:text-3xl font-mono font-bold text-white">
              ${finalBundlePrice.toFixed(2)}
            </span>
            {discountRate > 0 && (
              <span className="text-sm font-mono text-neutral-500 line-through">
                ${rawRetailTotal.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1">
            {discountRate > 0 ? (
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Total Savings: ${totalSavings.toFixed(2)} ({Math.round((totalSavings / rawRetailTotal) * 100)}% off retail)
              </span>
            ) : (
              <span className="text-xs font-mono text-neutral-400">
                Regular item pricing applied
              </span>
            )}
          </div>
        </div>

        <div className="w-full md:w-auto flex items-center gap-3">
          <button
            onClick={() => setItems(INITIAL_BUNDLE)}
            className="px-3 py-3 border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5"
            title="Reset Bundle"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>

          <button
            onClick={handleAddBundle}
            disabled={selectedCount === 0}
            className="flex-1 md:flex-none px-6 py-3 bg-red-600 hover:bg-red-700 active:translate-x-0.5 active:translate-y-0.5 text-white font-mono font-bold text-sm uppercase tracking-wider border-2 border-red-500 shadow-[3px_3px_0_#000] flex items-center justify-center gap-2 transition-all disabled:opacity-40"
          >
            {cartFeedback ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                {selectedCount} SKUs Added to Cart!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add {selectedCount} Selected to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  isSubscription: boolean;
  image: string;
}

const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: "powerband",
    name: "PowerBand Resistance Set (5-Level Stack)",
    variant: "Pack: 5-Band Heavy Set",
    price: 539.10,
    qty: 1,
    isSubscription: true,
    image: "/portfolio/recovrx/product/1.png",
  },
];

const UPSELL_ACCESSORIES = [
  {
    id: "posetech-up",
    name: "PoseTech Posture Corrector",
    variant: "Size S/M (Black)",
    price: 549.0,
    badge: "Most Picked Cross-Sell",
  },
  {
    id: "propulse-up",
    name: "ProPulse Percussive Therapy Massager",
    variant: "Matte Slate / 16mm Amplitude",
    price: 3499.0,
    badge: "Flagship Device",
  },
  {
    id: "crampout-up",
    name: "CrampOut Electrolyte Tablets",
    variant: "Lemon (20-Pack)",
    price: 299.0,
    badge: "High Repeat Reorder",
  },
];

export function TieredCartDrawerSimulator() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [checkoutFeedback, setCheckoutFeedback] = useState(false);

  const TIER_1_THRESHOLD = 500.0;
  const TIER_2_THRESHOLD = 1000.0;
  const TIER_3_THRESHOLD = 2000.0;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Progress Calculation
  const progressPercent = Math.min(100, Math.round((subtotal / TIER_3_THRESHOLD) * 100));

  const tier1Unlocked = subtotal >= TIER_1_THRESHOLD;
  const tier2Unlocked = subtotal >= TIER_2_THRESHOLD;
  const tier3Unlocked = subtotal >= TIER_3_THRESHOLD;

  const getNextGoalText = () => {
    if (!tier1Unlocked) {
      return `ONLY $${(TIER_1_THRESHOLD - subtotal).toFixed(2)} LEFT TO UNLOCK FREE SHIPPING!`;
    }
    if (!tier2Unlocked) {
      return `ONLY $${(TIER_2_THRESHOLD - subtotal).toFixed(2)} LEFT TO UNLOCK FREE ELECTROLYTE TABLETS!`;
    }
    if (!tier3Unlocked) {
      return `ONLY $${(TIER_3_THRESHOLD - subtotal).toFixed(2)} LEFT TO GET FREE ARCFLEX STRETCH STRAP!`;
    }
    return `🎉 CONGRATULATIONS! ALL 3 VIP TIERS UNLOCKED!`;
  };

  const updateQty = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const toggleSubscription = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextSub = !item.isSubscription;
          // Apply 10% discount on subscription or restore regular price
          const basePrice = item.isSubscription ? item.price / 0.9 : item.price;
          const newPrice = nextSub ? basePrice * 0.9 : basePrice;
          return { ...item, isSubscription: nextSub, price: newPrice };
        }
        return item;
      })
    );
  };

  const addUpsell = (upsell: (typeof UPSELL_ACCESSORIES)[0]) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === upsell.id);
      if (existing) {
        return prev.map((i) => (i.id === upsell.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...prev,
        {
          id: upsell.id,
          name: upsell.name,
          variant: upsell.variant,
          price: upsell.price,
          qty: 1,
          isSubscription: false,
          image: "/portfolio/recovrx/covers/cover.png",
        },
      ];
    });
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleCheckout = () => {
    setCheckoutFeedback(true);
    setTimeout(() => setCheckoutFeedback(false), 2400);
  };

  return (
    <div className="border-2 border-[var(--sf-ink)] bg-[#111111] text-white p-5 md:p-7 shadow-[5px_5px_0_var(--sf-ink)] rounded-none">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-neutral-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              Live Drawer Simulator
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
            Gamified 3-Tier Spend Milestone Drawer Cart
          </h3>
        </div>
        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1">
          Simulating Slide-Out Ajax Cart
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Progress Bar & Cart Contents */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Gamified Milestone Progress Bar */}
            <div className="bg-[#181818] border-2 border-neutral-800 p-4 mb-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {getNextGoalText()}
                </span>
                <span className="font-mono text-xs font-bold text-white">
                  ${subtotal.toFixed(2)} / $2,000.00
                </span>
              </div>

              {/* Multi-tier Progress Track */}
              <div className="w-full bg-neutral-900 h-3 border border-neutral-700 relative overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-red-600 via-red-500 to-amber-400 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* 3 Milestone Badges */}
              <div className="grid grid-cols-3 gap-2">
                <div
                  className={`border p-2 text-center transition-colors ${
                    tier1Unlocked
                      ? "border-emerald-500 bg-emerald-950/30 text-emerald-300"
                      : "border-neutral-800 bg-neutral-900 text-neutral-500"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 text-[11px] font-mono font-bold">
                    <Truck className="w-3 h-3" />
                    $500
                  </div>
                  <div className="text-[10px] uppercase font-sans mt-0.5">
                    {tier1Unlocked ? "✓ Free Shipping" : "Free Shipping"}
                  </div>
                </div>

                <div
                  className={`border p-2 text-center transition-colors ${
                    tier2Unlocked
                      ? "border-emerald-500 bg-emerald-950/30 text-emerald-300"
                      : "border-neutral-800 bg-neutral-900 text-neutral-500"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 text-[11px] font-mono font-bold">
                    <Gift className="w-3 h-3" />
                    $1,000
                  </div>
                  <div className="text-[10px] uppercase font-sans mt-0.5">
                    {tier2Unlocked ? "✓ Electrolytes" : "Free Tablets"}
                  </div>
                </div>

                <div
                  className={`border p-2 text-center transition-colors ${
                    tier3Unlocked
                      ? "border-emerald-500 bg-emerald-950/30 text-emerald-300"
                      : "border-neutral-800 bg-neutral-900 text-neutral-500"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 text-[11px] font-mono font-bold">
                    <Sparkles className="w-3 h-3" />
                    $2,000
                  </div>
                  <div className="text-[10px] uppercase font-sans mt-0.5">
                    {tier3Unlocked ? "✓ ArcFlex Strap" : "Free ArcFlex"}
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Line Items */}
            <div className="space-y-3 mb-5">
              {cartItems.length === 0 ? (
                <div className="border border-dashed border-neutral-800 p-8 text-center text-neutral-500 font-mono text-xs">
                  Your cart is currently empty. Add items from the upsell panel to test milestone rewards.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-2 border-neutral-800 bg-[#161616] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-sans font-bold text-sm text-white">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors ml-2"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">{item.variant}</p>

                      {/* Subscription badge toggle */}
                      <div className="mt-2">
                        <button
                          onClick={() => toggleSubscription(item.id)}
                          className={`text-[10px] font-mono px-2 py-0.5 border flex items-center gap-1 transition-colors ${
                            item.isSubscription
                              ? "bg-red-950/50 border-red-600 text-red-300"
                              : "bg-neutral-900 border-neutral-700 text-neutral-400 hover:text-neutral-200"
                          }`}
                        >
                          <RotateCcw className="w-2.5 h-2.5" />
                          {item.isSubscription
                            ? "Delivery: Every month | 10% Off Applied"
                            : "One-Time Purchase (Click for Monthly -10%)"}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-800">
                      <div className="flex items-center border border-neutral-700 bg-black">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="px-2 py-1 text-neutral-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 font-mono text-xs font-bold text-white min-w-[20px] text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="px-2 py-1 text-neutral-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="font-mono text-sm font-bold text-white min-w-[75px] text-right">
                        ${(item.price * item.qty).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Cart Subtotal and Checkout Button */}
          <div className="border-t-2 border-neutral-800 pt-4">
            <div className="flex items-center justify-between mb-3 font-mono">
              <span className="text-xs text-neutral-400 uppercase tracking-wider">Subtotal:</span>
              <span className="text-xl font-bold text-white">${subtotal.toFixed(2)} USD</span>
            </div>
            <p className="text-[11px] text-neutral-400 font-sans mb-3">
              Taxes and shipping calculated at checkout. Free shipping active on orders over $500.
            </p>
            <button
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className="w-full py-3.5 bg-red-600 hover:bg-red-700 active:translate-x-0.5 active:translate-y-0.5 text-white font-mono font-bold text-sm uppercase tracking-wider border-2 border-red-500 shadow-[3px_3px_0_#000] flex items-center justify-center gap-2 transition-all disabled:opacity-40"
            >
              {checkoutFeedback ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  Proceeding to Encrypted Shopify Checkout...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Check Out • ${subtotal.toFixed(2)} USD
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: In-Cart "You May Also Like" Upsell Carousel */}
        <div className="lg:col-span-5 bg-[#171717] border-2 border-neutral-800 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                You May Also Like
              </span>
              <span className="text-[11px] font-mono text-neutral-400">1-Click Upsell</span>
            </div>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Curated high-intent accessories rendered directly inside the cart drawer to maximize Average Order Value without interrupting the checkout flow:
            </p>

            <div className="space-y-3">
              {UPSELL_ACCESSORIES.map((upsell) => (
                <div
                  key={upsell.id}
                  className="border border-neutral-700 bg-neutral-900/70 p-3 hover:border-red-500 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-red-400 bg-neutral-950 px-1.5 py-0.5 border border-neutral-800 uppercase">
                        {upsell.badge}
                      </span>
                      <h5 className="font-sans font-bold text-xs text-white mt-1.5">{upsell.name}</h5>
                      <p className="text-[11px] text-neutral-400 font-mono">{upsell.variant}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs font-bold text-white mb-2">
                        ${upsell.price.toFixed(2)}
                      </div>
                      <button
                        onClick={() => addUpsell(upsell)}
                        className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white font-mono text-[11px] font-bold uppercase tracking-wider border border-red-500 flex items-center gap-1 transition-colors"
                      >
                        <Plus className="w-3 h-3" /> Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Zero external script tags • Pure Liquid & Ajax API
          </div>
        </div>
      </div>
    </div>
  );
}

const SEARCH_DATABASE = {
  collections: [
    { title: "Best Selling", handle: "best-sellers", count: "12 products" },
    { title: "Strength & Mobility", handle: "strength-mobility", count: "8 products" },
    { title: "Muscle Recovery", handle: "muscle-recovery", count: "15 products" },
    { title: "Percussive Therapy", handle: "percussion", count: "4 products" },
  ],
  products: [
    {
      title: "CoreLock Ab Roller",
      price: "$799.00",
      category: "Strength & Mobility",
      tags: ["core", "stability", "ab"],
    },
    {
      title: "ArcFlex Stretch Strap",
      price: "$349.00",
      category: "Mobility",
      tags: ["flexibility", "strap", "mobility"],
    },
    {
      title: "PoseTech Posture Corrector",
      price: "$549.00",
      category: "Mobility",
      tags: ["posture", "back", "brace"],
    },
    {
      title: "CrampOut Electrolyte Tablets",
      price: "$299.00",
      category: "Muscle Recovery",
      tags: ["hydration", "cramp", "electrolytes"],
    },
    {
      title: "NexoKnee Compression Sleeve",
      price: "$449.00",
      category: "Joint Support",
      tags: ["knee", "sleeve", "compression"],
    },
    {
      title: "ProPulse Percussion Massager",
      price: "$3,499.00",
      category: "Percussive Therapy",
      tags: ["massage", "gun", "percussion"],
    },
  ],
};

export function PredictiveSearchSimulator() {
  const [query, setQuery] = useState("a");

  const filteredCollections = SEARCH_DATABASE.collections.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProducts = SEARCH_DATABASE.products.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="border-2 border-[var(--sf-ink)] bg-[#121212] text-white p-5 md:p-7 shadow-[5px_5px_0_var(--sf-ink)] rounded-none">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-neutral-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              Live Modal Simulator
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white mt-1">
            Predictive AJAX Search Modal
          </h3>
        </div>
        <div className="font-mono text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1">
          Debounced & Indexed Storefront Search
        </div>
      </div>

      {/* Search Input Box */}
      <div className="max-w-xl mx-auto mb-6">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recovery tools, concerns, or collections..."
            className="w-full bg-[#1c1c1c] border-2 border-neutral-700 focus:border-red-500 text-white px-4 py-3 pl-11 font-mono text-sm focus:outline-none shadow-inner"
          />
          <Search className="w-5 h-5 text-neutral-400 absolute left-3.5" />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-12 text-neutral-400 hover:text-white p-1"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 border-2 border-red-500 font-mono text-sm">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2 font-mono text-[11px] text-neutral-400">
          <span>Quick queries:</span>
          {["massage", "knee", "posture", "cramp", "strap"].map((sample) => (
            <button
              key={sample}
              onClick={() => setQuery(sample)}
              className="text-red-400 hover:underline underline-offset-2"
            >
              #{sample}
            </button>
          ))}
        </div>
      </div>

      {/* Search Output Panel */}
      <div className="max-w-xl mx-auto bg-[#181818] border-2 border-neutral-800 p-4 md:p-5">
        {filteredCollections.length === 0 && filteredProducts.length === 0 ? (
          <div className="text-center py-6 text-neutral-500 font-mono text-xs">
            No matching collections or products found for "{query}".
          </div>
        ) : (
          <div className="space-y-5">
            {/* Collections matching */}
            {filteredCollections.length > 0 && (
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-1 mb-2">
                  Collections ({filteredCollections.length})
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {filteredCollections.map((col) => (
                    <div
                      key={col.handle}
                      className="p-2 bg-neutral-900 border border-neutral-800 hover:border-red-500 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <span className="font-sans text-xs text-white font-medium">{col.title}</span>
                      <span className="text-[10px] font-mono text-neutral-500">{col.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Products matching */}
            {filteredProducts.length > 0 && (
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-800 pb-1 mb-2">
                  Products ({filteredProducts.length})
                </div>
                <div className="space-y-2">
                  {filteredProducts.map((prod) => (
                    <div
                      key={prod.title}
                      className="p-2.5 bg-neutral-900 border border-neutral-800 hover:border-red-500 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <div className="font-sans text-xs text-white font-bold">{prod.title}</div>
                        <div className="text-[10px] font-mono text-red-400">{prod.category}</div>
                      </div>
                      <div className="font-mono text-xs font-bold text-white">{prod.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
