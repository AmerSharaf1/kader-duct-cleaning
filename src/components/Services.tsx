const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Air Duct Cleaning",
    description:
      "We use powerful, truck-mounted vacuums and specialized brushes to remove years of built-up dust, debris, mold, and allergens from your entire duct system.",
    features: ["Full system inspection", "High-powered vacuum extraction", "Sanitization treatment", "Before & after photos"],
    price: "Starting at $199",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Dryer Vent Cleaning",
    description:
      "Clogged dryer vents are a leading cause of house fires. We thoroughly clean your dryer vent line to keep your family safe and your dryer running efficiently.",
    features: ["Fire hazard prevention", "Lint trap & vent line cleaning", "Airflow testing", "Vent cap inspection"],
    price: "Starting at $99",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "HVAC Inspection & Sanitization",
    description:
      "A full inspection of your HVAC system followed by a professional-grade antimicrobial sanitization to eliminate bacteria, mold spores, and odors at the source.",
    features: ["Full HVAC inspection report", "Antimicrobial treatment", "Odor elimination", "Filter replacement"],
    price: "Starting at $149",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">Our Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From air ducts to dryer vents, we handle it all with expert care and the latest equipment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 p-8 flex flex-col"
            >
              <div className="text-blue-700 mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 mb-6 flex-1">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-blue-700 font-bold text-lg">{service.price}</span>
                <a
                  href="#contact"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
