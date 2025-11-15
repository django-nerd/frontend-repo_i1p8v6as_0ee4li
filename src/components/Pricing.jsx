export default function Pricing() {
  const tiers = [
    {
      name: "Tune‑Up",
      price: 129,
      features: ["21‑point inspection", "Filter replacement", "System cleaning", "Priority booking"],
    },
    {
      name: "Protection Plan",
      price: 24,
      unit: "/mo",
      features: ["Annual tune‑up", "No diagnostic fee", "10% off parts", "24/7 support"],
      highlighted: true,
    },
    {
      name: "Installation",
      price: 0,
      unit: "+",
      note: "Get a custom quote",
      features: ["Top brands", "Flexible financing", "Warranty included", "Permit & inspection"],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Clear options for every home. No hidden fees, ever.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`p-6 rounded-xl border ${tier.highlighted ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-100'} bg-white shadow-sm`}>
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">{tier.price === 0 ? 'Custom' : `$${tier.price}`}</span>
                {tier.unit && <span className="text-gray-500 mb-1">{tier.unit}</span>}
              </div>
              {tier.note && <p className="text-sm text-gray-500 mt-1">{tier.note}</p>}
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex justify-center w-full px-4 py-2 rounded-md font-semibold ${tier.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black'} transition-colors`}>
                {tier.price === 0 ? 'Get a Quote' : 'Choose Plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
