const steps = [
  {
    number: "01",
    title: "Request a Free Quote",
    description: "Fill out our quick contact form or give us a call. We'll get back to you within the hour with a transparent, no-obligation quote.",
  },
  {
    number: "02",
    title: "Schedule Your Appointment",
    description: "Pick a time that works for you — including evenings and weekends. We offer flexible scheduling to fit your busy life.",
  },
  {
    number: "03",
    title: "We Come to You",
    description: "Our certified technicians arrive on time with all the equipment needed. We protect your home with drop cloths and shoe covers.",
  },
  {
    number: "04",
    title: "Deep Clean & Inspect",
    description: "We thoroughly clean your ducts or dryer vent, and provide you with a full report and before-and-after documentation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-24 bg-slate-900 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">Simple Process</span>
          <h2 className="text-4xl font-extrabold mt-3 mb-4">How It Works</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Getting your ducts cleaned has never been easier. Four simple steps to a cleaner, healthier home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-900/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white text-2xl font-extrabold flex items-center justify-center mb-5 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            Book Your Cleaning Today
          </a>
        </div>
      </div>
    </section>
  );
}
