import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 md:px-16 py-6 shadow-sm">
      <h1 className="text-3xl font-bold text-pink-500">Brandku</h1>

      <button 
        className="md:hidden text-2xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none gap-6 md:gap-8 font-medium text-slate-600`}>
        <a href="#" className="hover:text-pink-500">Beranda</a>
        <a href="/fitur.html" className="hover:text-pink-500">Fitur</a>
        <a href="#" className="hover:text-pink-500">Harga</a>
      </nav>
    </header>
  );
};