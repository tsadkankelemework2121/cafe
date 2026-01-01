import { Coffee, UtensilsCrossed, Wine, IceCream, LucideIcon } from 'lucide-react';
import { Category } from '../data/mockData';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  UtensilsCrossed,
  Wine,
  IceCream,
};

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Coffee;

  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-44 md:w-48 bg-gradient-to-br from-[#F5E6D3] to-[#EDD9C0] rounded-3xl p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="bg-gradient-to-br from-[#3D2817] to-[#4A3426] p-5 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8 md:w-9 md:h-9 text-[#F5E6D3] transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-[#3D2817] text-lg md:text-xl group-hover:text-[#8B6F47] transition-colors duration-200">{category.name}</h3>
          <p className="text-xs md:text-sm text-[#6B4E3D] mt-2">{category.description}</p>
        </div>
      </div>
    </button>
  );
}
