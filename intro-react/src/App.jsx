import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureCard } from './components/FeatureCard';

function App() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <section className="py-20 px-16 text-center">
          <h2 className="text-3xl font-bold mb-16">Mengapa Brandku?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard icon="⚡" title="Mudah Digunakan" desc="Tidak perlu keahlian teknis. Setup dalam 5 menit." />
            <FeatureCard icon="🤖" title="Serba Otomatis" desc="Otomatiskan tugas berulang dan fokus pada hal yang penting." />
            <FeatureCard icon="📊" title="Laporan Real-time" desc="Pantau performa bisnismu kapan saja dan di mana saja." />
          </div>
        </section>
      </main>
      <footer className="py-8 text-center border-t border-slate-200">
        <p className="text-slate-500 text-sm">&copy; 2026 Brandku. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;