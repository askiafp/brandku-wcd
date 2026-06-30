import { useState } from 'react';

export const Hero = () => {
  const [counter, setCounter] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setCounter(prev => prev + 1);
    setFeedback(`Alias bayar Rp${counter + 1}.000.000,00`);
    setShow(true);
  };

  return (
    <section className="bg-slate-50 py-20 px-8 text-center">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Solusi Terbaik untuk Bisnismu</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
      </p>
      <button 
        onClick={handleClick}
        className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-900 transition"
      >
        Mulai Gratis
      </button>
      {show && <p className="mt-4 text-pink-600 font-medium">{feedback}</p>}
    </section>
  );
};

export default Hero;