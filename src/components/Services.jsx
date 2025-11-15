import { Wrench, ThermometerSnowflake, Fan, Flame, Leaf } from "lucide-react";

const services = [
  {
    icon: ThermometerSnowflake,
    title: "AC Installation & Repair",
    description: "Energy-efficient air conditioning installs, repairs, and seasonal tune-ups.",
  },
  {
    icon: Flame,
    title: "Furnace Installation & Repair",
    description: "Expert furnace service to keep your home warm and safe all winter.",
  },
  {
    icon: Fan,
    title: "Ductless & Heat Pumps",
    description: "Quiet, efficient solutions for year-round heating and cooling.",
  },
  {
    icon: Wrench,
    title: "Maintenance Plans",
    description: "Prevent breakdowns with scheduled maintenance and priority support.",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    description: "Air purifiers, humidifiers, and filtration systems for healthier air.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Services</h2>
          <p className="mt-3 text-gray-600">Everything you need to stay comfortable in the GTA — installations, repairs, and maintenance done right.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-10 h-10 grid place-items-center rounded-md bg-blue-50 text-blue-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
