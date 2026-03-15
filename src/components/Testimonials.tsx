const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    rating: 5,
    text: "Kader Duct did an incredible job. My allergies have been so much better since the cleaning. The team was professional, on time, and left my home spotless. Highly recommend!",
  },
  {
    name: "James T.",
    location: "Mississauga, ON",
    rating: 5,
    text: "My dryer was taking forever to dry clothes. After Kader cleaned the vent, it's like having a brand new machine. Wish I had done this sooner. Great value too!",
  },
  {
    name: "Linda K.",
    location: "Brampton, ON",
    rating: 5,
    text: "Very impressed with the service. They showed me before-and-after photos — I couldn't believe how much buildup was in the ducts. My home smells fresher already. 5 stars!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">What Our Customers Say</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our happy customers have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4">
              <StarRating count={t.rating} />
              <p className="text-gray-600 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-400">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
