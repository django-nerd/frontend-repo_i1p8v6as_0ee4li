import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");

    try {
      // This is a template action. Replace with your own backend/form provider.
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Request Service</h2>
          <p className="mt-3 text-gray-600">Tell us what you need and we’ll get back to you within the hour.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <input name="phone" required placeholder="Phone number" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <input name="email" type="email" placeholder="Email (optional)" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <input name="city" placeholder="City" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <textarea name="message" rows="4" placeholder="How can we help?" className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />

          <button type="submit" className="inline-flex justify-center px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
            {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Request"}
          </button>
          {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please call us.</p>}
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">Prefer to talk? Call 801‑123‑4567</p>
      </div>
    </section>
  );
}
