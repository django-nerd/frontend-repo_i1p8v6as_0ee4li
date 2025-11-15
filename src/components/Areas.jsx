export default function Areas() {
  const areas = [
    "Salt Lake City",
    "Provo",
    "Orem",
    "Ogden",
    "Sandy",
    "West Jordan",
    "South Jordan",
    "Lehi",
    "Draper",
    "Bountiful",
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Service Areas</h2>
          <p className="mt-3 text-gray-600">Proudly serving homeowners and businesses across Utah.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {areas.map((city) => (
            <div key={city} className="px-4 py-3 rounded-lg bg-white border border-gray-100 text-center text-gray-700 shadow-sm">
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
