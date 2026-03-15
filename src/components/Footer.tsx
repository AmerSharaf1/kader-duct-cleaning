export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Kader <span className="text-orange-400">Duct</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Professional air duct and dryer vent cleaning services. We&apos;re committed to improving your indoor air quality and keeping your home safe.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Air Duct Cleaning</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Dryer Vent Cleaning</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">HVAC Inspection</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition-colors">Sanitization Treatment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+16471234567" className="hover:text-orange-400 transition-colors">(647) 123-4567</a>
              </li>
              <li>
                <a href="mailto:info@kaderduct.com" className="hover:text-orange-400 transition-colors">info@kaderduct.com</a>
              </li>
              <li className="text-gray-400">Mon–Sat: 7am – 8pm</li>
              <li className="text-gray-400">Sun: 9am – 5pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kader Duct Cleaning. All rights reserved.</p>
          <p>Licensed & Insured | Serving the GTA</p>
        </div>
      </div>
    </footer>
  );
}
