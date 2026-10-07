"use client";

import React, { useState } from "react";
import MatchaScrollyCanvas from "../components/MatchaScrollyCanvas";
import {
  Sparkles,
  ShoppingBag,
  Check,
  Leaf,
  Clock,
  Compass,
  Award,
  ChevronRight,
  ShieldCheck,
  Flame,
  Coffee,
  Droplets,
} from "lucide-react";

export default function HomePage() {
  const [selectedSize, setSelectedSize] = useState<"12oz" | "16oz">("12oz");
  const [selectedMilk, setSelectedMilk] = useState<string>("Hokkaido Dairy");
  const [selectedSweetness, setSelectedSweetness] = useState<string>("Light Wasanbon (25%)");
  const [isOrdered, setIsOrdered] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const basePrice = selectedSize === "12oz" ? 7.5 : 9.0;
  const milkUpcharge = selectedMilk === "Barista Oat" ? 0.75 : 0;
  const totalPrice = (basePrice + milkUpcharge).toFixed(2);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30">
      {/* LUXURY NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/40 border-b border-white/[0.06] transition-all">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-emerald-500/40 bg-emerald-950/40 flex items-center justify-center">
            <span className="text-emerald-400 font-mono text-sm font-bold">蔵</span>
          </div>
          <div>
            <span className="font-extrabold tracking-widest text-sm text-white uppercase">
              Kura
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-mono tracking-wider text-emerald-400/80 uppercase">
              Artisanal Matcha
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-400">
          <a href="#tasting-notes" className="hover:text-emerald-300 transition-colors">
            Profile
          </a>
          <a href="#anatomy" className="hover:text-emerald-300 transition-colors">
            Layers
          </a>
          <a href="#provenance" className="hover:text-emerald-300 transition-colors">
            Provenance
          </a>
          <a href="#order-section" className="hover:text-emerald-300 transition-colors">
            Order
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Scroll: {Math.round(scrollPercentage * 100)}%
          </div>

          <a
            href="#order-section"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-mono tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order Brew</span>
          </a>
        </div>
      </header>

      {/* PRIMARY 400VH SCROLLYTELLING CANVAS EXPERIENCE */}
      <section className="relative w-full">
        <MatchaScrollyCanvas
          totalFrames={192}
          framePrefix="/sequence/frame_"
          onProgressChange={(progress) => setScrollPercentage(progress)}
        />
      </section>

      {/* SECTION: TASTING PROFILE & SENSORY MATRIX */}
      <section id="tasting-notes" className="relative z-20 py-24 px-6 md:px-16 lg:px-24 bg-black border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-emerald-500/20 bg-emerald-950/30 text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
                <Leaf className="w-3 h-3" />
                Sensory Matrix
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Flavour Architecture
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400 font-light leading-relaxed">
              Every bottle undergoes single-origin extraction. First harvest Uji tencha leaves are whisked at 82°C before flash-chilling over glacial ice.
            </p>
          </div>

          {/* Sensory Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Umami Richness",
                score: "9.6 / 10",
                note: "Deep savory sweetness from 40-day shade cultivation",
                color: "bg-emerald-400",
                pct: "96%",
              },
              {
                title: "Bitterness Control",
                score: "1.8 / 10",
                note: "Virtually zero astringency, silky smooth finish",
                color: "bg-emerald-500",
                pct: "18%",
              },
              {
                title: "Crema Density",
                score: "8.9 / 10",
                note: "Micro-whisked microfoam that holds suspension",
                color: "bg-amber-300",
                pct: "89%",
              },
              {
                title: "Dark Roast Contrast",
                score: "7.8 / 10",
                note: "Bold 18-hour cold brew roast balancing sweetness",
                color: "bg-amber-600",
                pct: "78%",
              },
            ].map((metric, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-white/5 bg-zinc-950/60 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300"
              >
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Profile 0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {metric.title}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-extrabold text-white">
                    {metric.score}
                  </span>
                </div>
                <div className="mt-3 w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${metric.color} transition-all duration-1000`}
                    style={{ width: metric.pct }}
                  />
                </div>
                <p className="mt-4 text-xs text-zinc-400 leading-relaxed font-light">
                  {metric.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TRIPLE LAYER ANATOMY */}
      <section id="anatomy" className="relative z-20 py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-emerald-400 uppercase">
              Density Stratification
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black uppercase tracking-tight">
              Anatomy of the Explosion
            </h2>
            <p className="mt-4 text-sm text-zinc-400 font-light">
              Crafted in three calibrated density zones designed to intermingle upon first swirl.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Layer 1: Uji Matcha */}
            <div className="relative p-8 rounded-3xl border border-emerald-500/20 bg-emerald-950/10 hover:bg-emerald-950/20 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                Layer 01 • Density 1.08 g/ml
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Ceremonial Uji Tencha
              </h3>
              <p className="mt-4 text-sm text-emerald-100/70 leading-relaxed font-light">
                Hand-picked from 60-year-old shade gardens in Wazuka, Kyoto. Slowly ground between granite stones at 5 microns to preserve cellular chlorophyll vitality.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-mono text-zinc-400">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> 100% JAS Organic certified
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> High L-theanine calming rush
                </li>
              </ul>
            </div>

            {/* Layer 2: Cream Emulsion */}
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                Layer 02 • Density 1.03 g/ml
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Cold Emulsion Cream
              </h3>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed font-light">
                High-fat pasture cream or ultra-creamy oat silk whipped at sub-ambient temperature to form a buoyant suspension buffer between tea and espresso.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-mono text-zinc-400">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" /> Zero artificial stabilizers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-white" /> Micro-aerated velvet mouthfeel
                </li>
              </ul>
            </div>

            {/* Layer 3: Cold Brew Espresso */}
            <div className="relative p-8 rounded-3xl border border-amber-500/20 bg-amber-950/10 hover:bg-amber-950/20 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Coffee className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                Layer 03 • Density 1.01 g/ml
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Slow-Drip Espresso Swirl
              </h3>
              <p className="mt-4 text-sm text-amber-100/70 leading-relaxed font-light">
                Ethiopian Yirgacheffe & Sumatran Mandheling beans slow-dripped drop by drop over 18 hours. Yields notes of cocoa nibs, wild honey, and toasted macadamia.
              </p>
              <ul className="mt-6 space-y-2 text-xs font-mono text-zinc-400">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Low acid, high aromatics
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" /> Naturally floats as crown layer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE ORDER & BATCH RESERVE */}
      <section id="order-section" className="relative z-20 py-28 px-6 md:px-16 lg:px-24 bg-black border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-emerald-500/20 bg-zinc-950/90 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Ambient Matcha Glow Behind Card */}
            <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Form & Customization */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-[11px] font-mono tracking-widest text-emerald-400 uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    Reserve Fresh Pour
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                    Experience The Batch
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400 font-light">
                    Every order is freshly whisked and chilled in small batches of 50 bottles.
                  </p>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                    Select Vessel Size
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["12oz", "16oz"] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selectedSize === size
                            ? "border-emerald-400 bg-emerald-950/30 text-white shadow-glow-matcha"
                            : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20"
                        }`}
                      >
                        <div className="font-bold text-base">{size} Minimalist Glass</div>
                        <div className="text-xs font-mono text-zinc-400 mt-1">
                          {size === "12oz" ? "Single Dose • $7.50" : "Grande Pour • $9.00"}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Milk Base Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                    Dairy / Plant Emulsion
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Hokkaido Dairy", "Barista Oat", "Almond Silk"].map((milk) => (
                      <button
                        key={milk}
                        onClick={() => setSelectedMilk(milk)}
                        className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                          selectedMilk === milk
                            ? "border-emerald-400 bg-emerald-950/30 text-emerald-300"
                            : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20"
                        }`}
                      >
                        {milk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sweetness Slider/Buttons */}
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                    Sweetness Profile
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Unsweetened (0%)",
                      "Light Wasanbon (25%)",
                      "Traditional (50%)",
                    ].map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedSweetness(level)}
                        className={`p-2.5 rounded-xl border text-[11px] font-mono transition-all ${
                          selectedSweetness === level
                            ? "border-amber-400 bg-amber-950/30 text-amber-300"
                            : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Checkout Summary Box */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  Order Summary
                </span>
                <div className="mt-4 pb-4 border-b border-white/10">
                  <div className="text-xl font-bold text-white">
                    Artisanal Iced Matcha Latte
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">
                    {selectedSize} • {selectedMilk} • {selectedSweetness}
                  </div>
                </div>

                <div className="py-4 space-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span>Base Brew</span>
                    <span>${basePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emulsion Adjustment</span>
                    <span>+${milkUpcharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Glacial Ice Spheres</span>
                    <span className="text-emerald-400">Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-baseline justify-between mb-6">
                  <span className="text-sm uppercase font-mono text-zinc-300">Total</span>
                  <span className="text-3xl font-extrabold font-mono text-white">
                    ${totalPrice}
                  </span>
                </div>

                {isOrdered ? (
                  <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 text-center text-xs font-mono flex items-center justify-center gap-2 animate-fade-in">
                    <Check className="w-4 h-4" />
                    Batch #042 Reserved! Handcrafting Now.
                  </div>
                ) : (
                  <button
                    onClick={() => setIsOrdered(true)}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 text-black font-extrabold text-sm uppercase tracking-wider hover:shadow-glow-matcha transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Confirm & Reserve Bottle
                  </button>
                )}

                <p className="mt-4 text-[10px] text-center font-mono text-zinc-500">
                  Shipped in sub-zero insulated vessels. Guaranteed fresh for 7 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PROVENANCE & SPECS */}
      <section id="provenance" className="relative z-20 py-20 px-6 md:px-16 lg:px-24 bg-black border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold font-mono text-emerald-400">
              100%
            </div>
            <div className="mt-1 text-xs uppercase font-mono text-zinc-400">
              Uji Single Estate
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold font-mono text-white">
              -18°C
            </div>
            <div className="mt-1 text-xs uppercase font-mono text-zinc-400">
              Flash Cryo Lock
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold font-mono text-amber-400">
              18 hrs
            </div>
            <div className="mt-1 text-xs uppercase font-mono text-zinc-400">
              Cold Roast Extraction
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold font-mono text-emerald-300">
              30g/hr
            </div>
            <div className="mt-1 text-xs uppercase font-mono text-zinc-400">
              Stone Mill Velocity
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 py-12 px-6 md:px-16 bg-black border-t border-white/[0.08] text-xs font-mono text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-bold">KURA MATCHA CO.</span>
          <span>© 2026 All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-300 transition-colors">Lab Reports</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">JAS Certified</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
        </div>
      </footer>
    </main>
  );
}
