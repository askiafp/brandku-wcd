export const FeatureCard = ({ icon, title, desc }) => (
  <article className="flex flex-col items-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600 text-sm">{desc}</p>
  </article>
);