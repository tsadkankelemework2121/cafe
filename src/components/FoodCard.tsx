import { Star } from 'lucide-react';
import { FoodItem } from '../data/mockData';

interface FoodCardProps {
  item: FoodItem;
  onClick: () => void;
}

export default function FoodCard({ item, onClick }: FoodCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] w-full text-left group"
    >
      <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#3D2817]/95 text-white text-xs md:text-sm px-3 py-1.5 rounded-full backdrop-blur-md font-semibold shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-bold text-[#3D2817] text-xl md:text-2xl leading-tight flex-1 group-hover:text-[#8B6F47] transition-colors duration-200">
            {item.name}
          </h3>
          <span className="font-bold text-[#8B6F47] text-xl md:text-2xl whitespace-nowrap">
            ${item.price}
          </span>
        </div>

        <p className="text-[#6B4E3D] text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            <span className="font-bold text-[#3D2817] text-base md:text-lg">
              {item.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-[#6B4E3D] text-xs md:text-sm">
            ({item.reviewCount} reviews)
          </span>
        </div>
      </div>
    </button>
  );
}
