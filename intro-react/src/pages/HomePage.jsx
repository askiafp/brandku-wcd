import CardGrid from "../components/CardGrid";
import { featureData } from "../data/feature";

const HomePage = () => {
  return (
    <main className="bg-slate-50">
      <section className="px-6 py-16 text-center md:px-16">
        <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-extrabold text-slate-900 md:text-5xl">
          Semua yang kamu butuhkan untuk mengembangkan BrandKu
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
          Kelola aktivitas bisnis, otomasi pekerjaan berulang, dan pantau
          perkembangan brand dari satu tempat.
        </p>
      </section>

      <CardGrid features={featureData} />
    </main>
  );
};

export default HomePage;
