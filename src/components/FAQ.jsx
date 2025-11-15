export default function FAQ() {
  const faqs = [
    {
      q: "Do you offer emergency service?",
      a: "Yes, we provide 24/7 emergency heating and cooling service across the GTA.",
    },
    {
      q: "Which brands do you install?",
      a: "We work with leading brands and help you choose the best system for your home and budget.",
    },
    {
      q: "Do you offer financing?",
      a: "Flexible financing is available on approved credit for new installations.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Absolutely. All technicians are fully licensed, insured, and background‑checked.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">FAQ</h2>
        <div className="mt-10 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
          {faqs.map((item, idx) => (
            <details key={idx} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <h3 className="text-gray-900 font-semibold">{item.q}</h3>
                <span className="shrink-0 rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-600 group-open:bg-blue-600 group-open:text-white group-open:border-blue-600">Open</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
