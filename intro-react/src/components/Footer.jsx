export const Footer = () => (
  <footer className="bg-slate-900 text-white py-12 px-16 mt-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Brandku</h2>
        <p className="text-slate-400 text-sm max-w-xs">
          Membantu bisnis kecil tumbuh lebih cepat dengan solusi manajemen otomatis.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Menu</h4>
        <ul className="text-slate-400 text-sm space-y-2">
          <li><a href="#" className="hover:text-pink-500">Beranda</a></li>
          <li><a href="#" className="hover:text-pink-500">Fitur</a></li>
          <li><a href="#" className="hover:text-pink-500">Harga</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Kontak</h4>
        <ul className="text-slate-400 text-sm space-y-2">
          <li>support@brandku.com</li>
          <li>Jakarta, Indonesia</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
      &copy; 2026 Brandku. All rights reserved.
    </div>
  </footer>
);