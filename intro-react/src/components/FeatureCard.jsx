export const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-left">
      <div className="text-3xl mb-4">{ icon }</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{ title }</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        { description }
      </p>
    </article>
  );
};

export default FeatureCard;