"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send this to an API route or form service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-16 py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-6">
              Get a Free Quote Today
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Ready for cleaner air? Fill out the form and we&apos;ll contact you within one hour with a free, no-obligation quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <a href="tel:+16471234567" className="text-blue-700 hover:underline">(647) 123-4567</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <a href="mailto:info@kaderduct.com" className="text-blue-700 hover:underline">info@kaderduct.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Hours</div>
                  <div className="text-gray-500">Mon–Sat: 7am – 8pm | Sun: 9am – 5pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-500">We received your request and will contact you within the hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      placeholder="(647) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="john@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>Air Duct Cleaning</option>
                    <option>Dryer Vent Cleaning</option>
                    <option>HVAC Inspection & Sanitization</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                    placeholder="Tell us about your home and any concerns..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-md"
                >
                  Send My Free Quote Request
                </button>

                <p className="text-center text-gray-400 text-xs">
                  We reply within 1 hour during business hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
