const plans = [
  {
    name: "Starter",
    price: "Gratis",
    description: "Cocok untuk mencoba fitur dasar BrandKu.",
    features: ["3 proyek aktif", "Template dasar", "Laporan mingguan"],
  },
  {
    name: "Pro",
    price: "Rp99.000",
    description: "Untuk bisnis kecil yang ingin bekerja lebih rapi.",
    features: ["Proyek tanpa batas", "Otomasi fitur", "Laporan real-time"],
  },
  {
    name: "Business",
    price: "Rp249.000",
    description: "Untuk tim yang butuh kontrol dan kolaborasi lebih lengkap.",
    features: ["Akses tim", "Prioritas support", "Integrasi lanjutan"],
  },
];

const PricingPage = () => {
  return (
    <main className="bg-slate-50 px-6 py-16 md:px-16">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
          Pilih paket yang paling pas
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Mulai dari gratis, lalu upgrade saat kebutuhan bisnismu berkembang.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
            <p className="mt-3 text-3xl font-extrabold text-pink-500">
              {plan.price}
            </p>
            <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">
              {plan.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
};

export default PricingPage;
