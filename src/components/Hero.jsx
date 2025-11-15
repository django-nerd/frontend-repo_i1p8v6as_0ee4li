import { Phone, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_10%,theme(colors.blue.100),transparent_60%),radial-gradient(50%_50%_at_0%_0%,theme(colors.sky.100),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1 ring-1 ring-blue-100">Trusted HVAC services across the GTA</span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Keep your home comfortable year‑round
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Fast, reliable heating and cooling installations, repairs, and maintenance for homes and businesses in the Greater Toronto Area.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow">
                <Phone size={18} /> Schedule Service
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white hover:bg-gray-50 text-gray-900 font-semibold border border-gray-200">
                Explore Services
              </a>
            </div>

            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-gray-600">
              {[
                "24/7 Emergency Support",
                "Licensed & Insured",
                "Transparent Pricing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-100 to-sky-200 shadow-inner" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 border border-gray-100">
              <p className="text-sm font-semibold text-gray-900">Same‑day service available</p>
              <p className="text-xs text-gray-500">Call before 12pm for priority booking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
