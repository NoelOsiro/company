import { heroCards } from '@/data/services/servicePage';
import React from 'react';

interface Iprops {
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HeroSectionCard: React.FC<Iprops> = ({ color, icon, title, description }: Iprops) => {
  return (
    <div className={`p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer`}>
      <span className={`p-5 rounded-full bg-${color}-500 text-white shadow-lg shadow-${color}-200`}>
        {icon}
      </span>
      <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10 " style={{ backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png")' }}>
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border mt-3 md:mt-2 sm:mt-1 ">
        {heroCards.map((card, index) => (
          <HeroSectionCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
