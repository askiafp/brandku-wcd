import { featureData } from '../data/feature';
import Card from './Card';

const CardGrid = ({ features = featureData }) => {
  return (
    <section className="py-20 px-16 text-center">
      <h2 className="text-3xl font-bold mb-16 text-slate-900">Mengapa Brandku?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((item, index) => (
          <Card 
            key={index}
            id={item.id}
            icon={item.icon}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
