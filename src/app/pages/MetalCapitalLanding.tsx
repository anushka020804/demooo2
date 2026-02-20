import React, { useState } from "react";
import { motion } from "motion/react";
import { Building2, ArrowRight, CheckCircle2, ShieldCheck, Users, Sparkles } from "lucide-react";

export default function MetalCapitalLanding() {
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", number: "" });

  // helper to scroll an element to the center of the viewport
  const scrollToCenter = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const top = rect.top + scrollTop - Math.max(0, (window.innerHeight - rect.height) / 2);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // scroll element so its top is just below the fixed navbar
  const scrollToStart = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const navHeight = 80; // matches navbar height (h-20)
    const top = rect.top + scrollTop - navHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar (copied from main landing) */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/logo.jpg" alt="Qistonpe Logo" className="h-14 w-auto max-w-[220px] object-contain bg-white" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToStart('hero'); }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToCenter('about'); }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToCenter('solutions'); }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Solution</a>
            <div className="relative group">
              <button aria-haspopup="true" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1 focus:outline-none">
                Products
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50">
                <a href="/" className="block px-5 py-3 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg">OpportunityX</a>
              </div>
            </div>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToCenter('entrypoints'); }} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block">Log in</a>
            <a href="/signup" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5">Start Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Abstract Background and Side-by-Side Layout */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10 bg-white">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-50 blur-3xl opacity-60 mix-blend-multiply animate-blob" />
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-50 blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
          <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[70%] rounded-full bg-amber-50 blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 max-w-2xl leading-[1.1] mx-auto lg:mx-0">
              Scale Your<br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Manufacturing</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Empower India's small manufacturers to access growth capital, modernize operations, and scale sustainably via <strong className="text-slate-900">QistonPe MetalCapital</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
                onClick={() => setShowPopup(true)}
              >
                Start Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg mx-auto lg:mx-0"
          >
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900/90 backdrop-blur-xl border border-blue-900 shadow-2xl p-10 text-white flex flex-col gap-6 overflow-hidden"
                style={{ boxShadow: '0 8px 32px 0 rgba(32, 80, 200, 0.25), 0 0 0 4px rgba(59,130,246,0.08)' }}>
              <div className="absolute -inset-1.5 rounded-3xl pointer-events-none"
                   style={{ background: 'linear-gradient(120deg,rgba(59,130,246,0.18),rgba(99,102,241,0.12),rgba(16,185,129,0.10))', filter: 'blur(16px)', zIndex: 0 }} />
              <div className="relative z-10 flex items-center gap-4 mb-2">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                  <Building2 className="w-9 h-9 text-white drop-shadow" />
                </span>
                <span className="text-3xl font-extrabold tracking-wide text-white drop-shadow">MetalCapital</span>
              </div>
              <ul className="relative z-10 text-base space-y-3 mb-2">
                <li className="flex items-center gap-3"><span className="inline-block w-3 h-3 rounded-full bg-white/70 shadow"></span><span className="font-medium">Order-backed raw material financing for MSMEs</span></li>
                <li className="flex items-center gap-3"><span className="inline-block w-3 h-3 rounded-full bg-white/70 shadow"></span>Zero collateral, direct supplier payment</li>
                <li className="flex items-center gap-3"><span className="inline-block w-3 h-3 rounded-full bg-white/70 shadow"></span>Up to <b>₹3 Cr</b>, 45–120 days tenure</li>
                <li className="flex items-center gap-3"><span className="inline-block w-3 h-3 rounded-full bg-white/70 shadow"></span>Business cycle-aligned repayment</li>
              </ul>
              <div className="relative z-10 flex flex-wrap gap-3 mt-2">
                <span className="inline-block bg-white/30 text-white border border-white/40 px-4 py-1.5 rounded-full text-xs font-bold shadow">Verified POs</span>
                <span className="inline-block bg-white/30 text-white border border-white/40 px-4 py-1.5 rounded-full text-xs font-bold shadow">No Collateral</span>
                <span className="inline-block bg-white/30 text-white border border-white/40 px-4 py-1.5 rounded-full text-xs font-bold shadow">Direct to Supplier</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Start Now Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
            <button className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-xl" onClick={() => { setShowPopup(false); setSubmitted(false); setForm({ name: '', number: '' }); }}>&times;</button>
            {!submitted ? (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Request a Callback</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" required pattern="[0-9]{10,}" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.number} onChange={e => setForm(f => ({ ...f, number: e.target.value }))} />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-all">Submit</button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Thank you!</h3>
                <p className="text-slate-700 mb-2">Our team will get back to you soon!</p>
                <button className="mt-4 px-6 py-2 bg-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-300" onClick={() => { setShowPopup(false); setSubmitted(false); setForm({ name: '', number: '' }); }}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}


      {/* Empowered by Global Standards Section (with 3 logos) */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-base font-semibold text-slate-400 mb-10 tracking-widest uppercase">Empowered by Global Standards</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-12">
            <div className="flex-1 flex flex-col items-center">
              <img src="/partners/kotak.png" alt="Kotak" className="h-14 mb-2 transition duration-300 object-contain" />
              <span className="text-xs text-slate-400 tracking-widest mt-1">STRATEGIC LENDER</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img src="/partners/efl.png" alt="EFL" className="h-14 mb-2 transition duration-300 object-contain" />
              <span className="text-xs text-slate-400 tracking-widest mt-1">ECOSYSTEM PARTNER</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img src="/partners/iima.png" alt="IIMA Ventures" className="h-14 mb-2 transition duration-300 object-contain" />
              <span className="text-xs text-slate-400 tracking-widest mt-1">INCUBATED AT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Start Now Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm relative">
            <button className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-xl" onClick={() => { setShowPopup(false); setSubmitted(false); setForm({ name: '', number: '' }); }}>&times;</button>
            {!submitted ? (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Request a Callback</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" required className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" required pattern="[0-9]{10,}" className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" value={form.number} onChange={e => setForm(f => ({ ...f, number: e.target.value }))} />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-all">Submit</button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Thank you!</h3>
                <p className="text-slate-700 mb-2">Our team will get back to you soon!</p>
                <button className="mt-4 px-6 py-2 bg-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-300" onClick={() => { setShowPopup(false); setSubmitted(false); setForm({ name: '', number: '' }); }}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* $150B+ Opportunity Section in a Box */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl bg-white/30 backdrop-blur-xl border border-blue-200 shadow-2xl p-10 text-center overflow-hidden"
            style={{ boxShadow: '0 8px 32px 0 rgba(32, 80, 200, 0.18), 0 0 0 4px rgba(59,130,246,0.08)' }}>
            <div className="absolute -inset-1.5 rounded-3xl pointer-events-none"
              style={{ background: 'linear-gradient(120deg,rgba(59,130,246,0.10),rgba(99,102,241,0.08),rgba(16,185,129,0.07))', filter: 'blur(16px)', zIndex: 0 }} />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl z-0" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">Stop Borrowing at 24%. <span className="text-blue-700">Start Growing at Scale.</span></h2>
              <div className="text-lg md:text-2xl text-slate-900 font-normal mb-4 max-w-3xl mx-auto">
                <p>India’s small manufacturers are sitting on massive potential but zero cash. With a $150 billion credit gap, most businesses are forced to choose between turning down big orders or taking high-interest debt that eats their margins.</p>
              </div>

              <div className="text-slate-700 text-lg md:text-2xl max-w-2xl mx-auto space-y-4 mt-4">
                  <p>MetalCapital solves the <strong className="text-blue-700 font-bold">Upfront Gap.</strong> We fund your purchase orders and pay your suppliers directly. You keep the production line moving, keep your profits, and finally say <strong className="text-blue-700 font-bold">&quot;yes&quot;</strong> to the big contracts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Inserted MetalCapital details and three info boxes */}
      <section id="solutions" className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center">QistonPe MetalCapital</h3>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto text-center">Bridge ancillary manufacturers' working-capital gaps through unsecured, order-backed financing routed directly to suppliers.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-10 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 border border-indigo-900/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-lg bg-indigo-900/20 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-white">Key Features</h4>
                </div>
                <ul className="text-sm space-y-2 text-white/90">
                  <li>Purchase Order & Bill-of-Materials linked disbursement</li>
                  <li>Underwriting using GST data, e-invoice and e-way bill</li>
                  <li>Direct payments to suppliers</li>
                  <li>No collateral; loans from ₹5 Lakhs to ₹3 Cr</li>
                  <li>Tenure matched to project and OEM payment cycles</li>
                </ul>
              </div>

              <div className="p-10 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 border border-indigo-900/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-lg bg-indigo-900/20 text-white flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-white">De-Risking for FIs</h4>
                </div>
                <ul className="text-sm space-y-2 text-white/90">
                  <li>Automated PO / BoM / e-invoice validation</li>
                  <li>E-way bill checks for supply and receipt</li>
                  <li>OEM / anchor mapping for counterparty strength</li>
                  <li>Escrow-based repayment controls</li>
                  <li>Cluster-level monitoring and early warning signals</li>
                </ul>
              </div>

              <div className="p-10 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 border border-indigo-900/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-lg bg-indigo-900/20 text-white flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg text-white">Customer Profile</h4>
                </div>
                <ul className="text-sm space-y-2 text-white/90">
                  <li>At least 3 years of operating history</li>
                  <li>Registered business: Sole prop / Partnership / Pvt. Ltd.</li>
                  <li>Located near large OEM clusters</li>
                  <li>Manufacturing MSMEs (turnover up to ₹50 Cr)</li>
                  <li>Supplying Heavy Engineering, Power, Railways, or Defense</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OpportunityX & MetalCapital Entry Points - Redesigned */}
      <section id="entrypoints" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">The Ecosystem Entry Points</h3>
            <p className="text-slate-700 max-w-3xl mx-auto">QistonPe combines bid discovery and order-backed finance to make MSMEs credit-ready and operationally efficient.</p>
          </div>

            <div className="grid gap-8 md:grid-cols-2">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </span>
                <h4 className="text-2xl font-bold text-indigo-900 mb-0">OpportunityX</h4>
              </div>
              <p className="text-slate-600 mb-4">AI-curated tender alerts and step-by-step participation guidance using GeM and PSU data.</p>
              <ul className="text-sm text-slate-600 space-y-2 mb-6">
                <li>HSN & keyword matching</li>
                <li>Instant BoM & bid templates</li>
                <li>Daily curated matches</li>
              </ul>
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:from-indigo-700 hover:to-blue-700 transition">Start Now <ArrowRight className="w-4 h-4 inline-block ml-2" /></button>
            </div>

            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-700 flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7 text-white" />
                </span>
                <h4 className="text-2xl font-bold text-slate-900 mb-0">QistonPe MetalCapital</h4>
              </div>
              <p className="text-slate-600 mb-4">Order-backed finance routed to suppliers, designed for MSMEs to execute and fulfill larger orders.</p>
              <ul className="text-sm text-slate-600 space-y-2 mb-6">
                <li>Zero collateral, supplier-direct disbursals</li>
                <li>Loans from ₹5L to ₹3Cr</li>
                <li>Tenure aligned to OEM cycles</li>
              </ul>
              <button onClick={() => setShowPopup(true)} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition">Request Callback <ArrowRight className="w-4 h-4 inline-block ml-2" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Traceable Supply Chain - Digital Workflow */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Traceable Supply Chain Digital Workflow</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mt-3">QistonPe’s digital workflow validates each purchase order, bill of material, and supplier transaction—creating a closed-loop flow from order to repayment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="rounded-2xl p-6 bg-blue-50 text-slate-800 shadow-sm">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-indigo-600/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-indigo-700" />
                </div>
                <div className="text-sm font-semibold text-indigo-700">01</div>
                <h4 className="font-semibold text-base text-slate-900">Phygital Onboarding</h4>
                <p className="text-sm text-slate-600 max-w-xs">KYC & credit validation using verified PO, GST, and historical financial data.</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-blue-50 text-slate-800 shadow-sm">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-indigo-600/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-indigo-700" />
                </div>
                <div className="text-sm font-semibold text-indigo-700">02</div>
                <h4 className="font-semibold text-base text-slate-900">AI-Driven BoM</h4>
                <p className="text-sm text-slate-600 max-w-xs">Matching procurement needs with supplier quotes and purchase order requirements.</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-blue-50 text-slate-800 shadow-sm">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-indigo-600/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-indigo-700" />
                </div>
                <div className="text-sm font-semibold text-indigo-700">03</div>
                <h4 className="font-semibold text-base text-slate-900">Transaction Underwriting</h4>
                <p className="text-sm text-slate-600 max-w-xs">Digital PO verification, Gen-AI BoM matching, and e-way / invoice checks.</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-blue-50 text-slate-800 shadow-sm">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-indigo-600/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-indigo-700" />
                </div>
                <div className="text-sm font-semibold text-indigo-700">04</div>
                <h4 className="font-semibold text-base text-slate-900">Disbursement</h4>
                <p className="text-sm text-slate-600 max-w-xs">Direct payment to suppliers. Zero diversion risk. Aligned with the business cycle and project.</p>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-blue-50 text-slate-800 shadow-sm">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-indigo-600/10 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-indigo-700" />
                </div>
                <div className="text-sm font-semibold text-indigo-700">05</div>
                <h4 className="font-semibold text-base text-slate-900">Repayment</h4>
                <p className="text-sm text-slate-600 max-w-xs">Traceable repayments, captured from OEM project proceeds.</p>
              </div>
            </div>
          </div>
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
