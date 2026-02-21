import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Building2, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Users, Phone, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export function MarketingLandingPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", number: "" });

  const scrollToCenter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      try { history.replaceState(null, "", `#${id}`); } catch (e) { /* ignore */ }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/logo.jpg" alt="Qistonpe Logo" className="h-14 w-auto max-w-[220px] object-contain bg-white" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); try { history.replaceState(null, '', '#') } catch (e) {} }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToCenter('about') }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#problem-solution" onClick={(e) => { e.preventDefault(); scrollToCenter('problem-solution') }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Solution</a>
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1 focus:outline-none">
                Products
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50">
                <a href="/metalcapital" className="block px-5 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg">Metal Capital</a>
              </div>
            </div>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToCenter('features') }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/login")} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block">
              Log in
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section (updated) */}
      <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Soft background shapes */}
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute -left-32 -top-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute right-0 top-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="grid lg:grid-cols-2 gap-12 items-center" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Left: Messaging */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                New: AI-Powered Tender Analysis
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Turning Small Factories
                <span className="block text-indigo-600">into Big Stories</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                OpportunityX finds tenders by matching your HSN codes and product keywords, and helps with bid documentation and tender analysis.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button onClick={() => navigate('/signup')} aria-label="Start for free" className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-transform">
                  Start for Free
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button onClick={() => scrollToCenter('features')} aria-label="See how it works" className="inline-flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-xl bg-white text-slate-700 shadow-sm hover:shadow-md">
                  See How It Works
                </button>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                  <div>
                    <div className="text-sm font-semibold">Curated Matches</div>
                    <div className="text-xs text-slate-500">Only relevant tenders, delivered daily</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-sm font-semibold">Bank-grade Security</div>
                    <div className="text-xs text-slate-500">Secure data and compliant integrations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual/Stats card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-2xl border border-slate-100">
                <div className="flex items-center justify-center mb-4">
                      <div className="text-base text-indigo-600">Product Preview</div>
                </div>

                <div className="h-56 md:h-64 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg flex items-center justify-center text-indigo-600 overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/logo.jpg"
                  >
                    <source src="/assets/vid.mp4" type="video/mp4" />
                    {/* Fallback to image if video not supported */}
                    <img src="/assets/logo.jpg" alt="Platform dashboard preview" className="w-full h-full object-cover" />
                  </video>
                </div>

                <div className="mt-4 text-sm text-slate-600">Connect your profile, set keywords, and get matched automatically — no manual search required.</div>
              </div>

              {/* Help strip under the card */}
              <div className="mt-4 flex items-center gap-4 bg-white border border-slate-100 rounded-lg p-3 shadow-sm">
                <div className="flex-1 text-sm text-slate-700">
                  Need help signing up? Call us or chat on WhatsApp — we're here to help.
                </div>
                <div className="flex items-center gap-2">
                  <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm hover:bg-indigo-100 transition-colors">
                    <Phone className="w-4 h-4" />
                    +91 98765 43210
                  </a>
                  <a href="https://wa.me/919876543210?text=Hi%20I%20need%20help%20signing%20up" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm hover:bg-green-100 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Scroller */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-base font-semibold text-slate-400 mb-10 tracking-widest uppercase">Empowered by Global Standards</p>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-12 md:gap-24">
            <div className="flex flex-col items-center w-full max-w-[240px]">
              <img src="/partners/kotak.png" alt="Kotak" className="h-16 mb-3 object-contain transition duration-300" />
              <span className="text-xs text-slate-400 tracking-widest mt-1">STRATEGIC LENDER</span>
            </div>
            <div className="flex flex-col items-center w-full max-w-[240px]">
              <img src="/partners/efl.png" alt="EFL" className="h-16 mb-3 object-contain transition duration-300" />
              <span className="text-xs text-slate-400 tracking-widest mt-1">ECOSYSTEM PARTNER</span>
            </div>
            <div className="flex flex-col items-center w-full max-w-[240px]">
              <img src="/partners/iima.png" alt="IIMA Ventures" className="h-16 mb-3 object-contain transition duration-300" />
              <span className="text-xs text-slate-400 tracking-widest mt-1">INCUBATED AT</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-md border border-blue-100">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-indigo-900 mb-4">Everything you need to scale</h2>
                <p className="text-indigo-800 max-w-2xl mx-auto text-lg">
                  Streamline your business operations with our integrated suite of tools designed for modern enterprises.
                </p>
              </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
            {/* Feature 1 */}
            <motion.div whileHover={{ y: -5 }} className="w-full max-w-md p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">OpportunityX</h3>
              <p className="text-slate-600 leading-relaxed mb-6">AI-driven tender discovery that surfaces the best matches for your capabilities.</p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">Learn more <ArrowRight className="w-4 h-4" /></a>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="w-full max-w-md p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-amber-100 hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => setShowPopup(true)}>
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Metal Capital</h3>
              <p className="text-slate-600 leading-relaxed mb-6">Fast supply-chain financing tailored for manufacturers and large projects.</p>
              <span className="text-amber-600 font-medium hover:text-amber-700 flex items-center gap-1">Request callback <ArrowRight className="w-4 h-4" /></span>
            </motion.div>

            {/* Partner Network removed as requested */}


                {/* Metal Capital Popup */}
                {showPopup && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
                      <button className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-xl" onClick={() => { setShowPopup(false); setSubmitted(false); setForm({ name: '', number: '' }); }}>&times;</button>
                      {!submitted ? (
                        <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                          <h3 className="text-xl font-bold mb-4 text-slate-900">Request a Callback</h3>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                            <input type="text" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                          </div>
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input type="tel" required pattern="[0-9]{10,}" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" value={form.number} onChange={e => setForm(f => ({ ...f, number: e.target.value }))} />
                          </div>
                          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-lg transition-all">Submit</button>
                        </form>
                      ) : (
                        <div className="text-center py-8">
                          <h3 className="text-xl font-bold mb-2 text-amber-600">Thank you!</h3>
                          <p className="text-slate-700 mb-2">Our team will reach out to you soon.</p>
                          <button className="mt-4 px-6 py-2 bg-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-300" onClick={() => { setShowPopup(false); setSubmitted(false); setForm({ name: '', number: '' }); }}>Close</button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">About QistonPe</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              An AI-powered enablement platform for small manufacturers — helping them boost productivity, cut costs, and win new business.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We empower small manufacturers to win and fulfill new business through curated bid discovery and order-backed raw-material financing. From instant Bill of Materials (BoM) generation and smart procurement to integrated financing and supplier orchestration, we streamline operations so manufacturers can focus on production and growth.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our tools combine automated tender-matching, easy bid documentation, and working-capital solutions to reduce time-to-win and speed up fulfillment — helping manufacturers scale efficiently.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm">Curated Bid Discovery</span>
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm">Instant BoM & Procurement</span>
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm">Order-backed Financing</span>
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-8 shadow-lg border border-slate-100 bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
              <h3 className="text-xl font-semibold mb-4">How QistonPe helps</h3>
              <ul className="space-y-4 text-white/90">
                <li>
                  <strong className="text-white">Find relevant tenders:</strong> <span className="text-white/90">Automated HSN & keyword matching surfaces the best-fit opportunities.</span>
                </li>
                <li>
                  <strong className="text-white">Create winning bids:</strong> <span className="text-white/90">Generate professional bid documents and BoMs quickly with AI-assisted templates.</span>
                </li>
                <li>
                  <strong className="text-white">Finance production:</strong> <span className="text-white/90">Access order-backed financing to buy raw materials and scale fulfillment.</span>
                </li>
                <li>
                  <strong className="text-white">Streamline procurement:</strong> <span className="text-white/90">Smart sourcing suggestions and supplier coordination to cut costs and lead times.</span>
                </li>
              </ul>
              <div className="mt-6 text-sm text-white/80">Trusted by growing manufacturers to reduce friction from opportunity to delivery.</div>
            </div>
          </div>
        </div>
      </section>
      {/* Problem / Solution Section (restyled, navy tones) */}
      <section id="problem-solution" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-blue-800 h-full">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">The Problem</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Small manufacturers struggle to discover relevant tenders, create professional bid documents quickly, and secure the working capital needed to fulfill orders. Manual BoM creation, fragmented supplier sourcing, and slow procurement increase time-to-win and reduce margins.
                </p>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Finding relevant tenders is time-consuming and noisy.</li>
                  <li>Preparing bids and BoMs is manual and error-prone.</li>
                  <li>Lack of order-backed financing delays production.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="rounded-2xl p-8 shadow-md border border-blue-100 bg-gradient-to-br from-white/80 to-blue-100 text-blue-900 h-full">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Our Solution</h3>
                </div>
                <p className="text-blue-800 mb-4 leading-relaxed">
                  QistonPe automates opportunity discovery, speeds up bid creation, and connects manufacturers to order-backed financing — so teams can focus on production while the platform handles matching, documentation, and working capital.
                </p>
                <ul className="list-disc pl-5 text-blue-800 space-y-2">
                  <li>Automated HSN & keyword matching to surface high-fit tenders.</li>
                  <li>AI-assisted BoM and bid document generation to reduce prep time.</li>
                  <li>Order-backed financing to bridge procurement and production.</li>
                </ul>
                <div className="mt-6">
                  <button onClick={() => navigate('/signup')} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg font-semibold shadow-sm hover:bg-blue-900">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Strength (improved card grid) */}
      <section id="coverage-strength" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-indigo-700 tracking-widest uppercase">Coverage Strength</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">We cover all major tender sources</h2>
            <p className="text-slate-600 mt-2">Comprehensive, real-time coverage across public and private sources — so you never miss an opportunity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">Central Marketplace</div>
                  <div className="text-sm text-slate-600">Aggregated public listings</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">GeM</div>
                  <div className="text-sm text-slate-600">Government e-Marketplace</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">CPPP</div>
                  <div className="text-sm text-slate-600">Central Public Procurement Portal</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">PSU & OEMs</div>
                  <div className="text-sm text-slate-600">Public and OEM tenders</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">Major Contractors</div>
                  <div className="text-sm text-slate-600">BHEL, NTPC, HAL, IOCL, SAIL, HPCL…</div>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 lg:col-span-1 bg-blue-100 rounded-2xl p-6 shadow-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-base font-semibold text-slate-900">+85 More</div>
                <div className="text-sm text-slate-600">Regional & private portals included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to transform your business?</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto">
            Join our platform today and get instant access to thousands of tender opportunities and financing solutions.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="px-10 py-4 bg-white text-indigo-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Start Now - It's Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-6 text-sm text-indigo-200">
            No credit card required. Free plan available forever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-700 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/assets/logo.jpg" alt="Qistonpe Logo" className="h-12 w-auto max-w-[220px] object-contain bg-white" />
              </div>
              <p className="text-sm text-slate-600">Empowering businesses with smart opportunities and capital.</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Links</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><a href="https://in.linkedin.com/company/qistonpe" target="_blank" rel="noreferrer noopener" className="hover:text-indigo-600 transition-colors">LinkedIn</a></li>
                <li><span className="text-slate-500 cursor-not-allowed" aria-disabled="true">Customer Agreement</span></li>
                <li><span className="text-slate-500 cursor-not-allowed" aria-disabled="true">Terms &amp; Conditions</span></li>
                <li><span className="text-slate-500 cursor-not-allowed" aria-disabled="true">Privacy Policy</span></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
              <p className="text-sm text-slate-700 mb-3">Write to <a href="mailto:info@qistonpe.com" className="text-indigo-600 hover:underline">info@qistonpe.com</a> to get started and receive updates on QistonPe™ MetalCapital</p>
              <p className="text-sm text-slate-500">Copyright © 2026 Ambition10T Innovations Private Limited<br/>All rights reserved</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 text-sm text-slate-500 text-center">
            <span>© 2026 Ambition10T Innovations Private Limited — All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
