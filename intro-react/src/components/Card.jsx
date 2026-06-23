import { useState, useEffect } from 'react';

const Card = ({ id, icon, title, description }) => {
  const [jumlahSuka, setJumlahSuka] = useState(() => {
    const saved = localStorage.getItem(`suka-${id}`);
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  useEffect(() => {
    localStorage.setItem(`suka-${id}`, jumlahSuka);
  }, [jumlahSuka, id]);

  return (
    <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-left">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      <button 
        className="mt-4 px-4 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors font-medium text-sm"
        onClick={() => setJumlahSuka(jumlahSuka + 1)}
      >
        ❤️ Suka ({jumlahSuka})
      </button>
    </article>
  );
};

export default Card;