import { Menu, Phone, Snowflake, Flame } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Areas", href: "#areas" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative w-9 h-9 grid place-items-center rounded-md bg-gradient-to-tr from-sky-500 to-blue-600 text-white shadow">
              <Snowflake size={18} className="absolute left-1 top-1 opacity-80" />
              <Flame size={18} className="absolute right-1 bottom-1 opacity-80" />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-gray-900">HVAC Template</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">GTA</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
              <Phone size={16} />
              <span className="text-sm font-semibold">Request Service</span>
            </a>
          </div>

          <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 rounded-md border border-gray-200 text-gray-700">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="px-3 py-2 rounded-md bg-blue-600 text-white text-center">Request Service</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
