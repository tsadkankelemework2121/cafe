import { X, Star, Flame, Candy, ChefHat, AlertCircle } from 'lucide-react';
import { FoodItem, reviews as allReviews } from '../data/mockData';
import ReviewCard from './ReviewCard';

interface FoodDetailModalProps {
  item: FoodItem;
  onClose: () => void;
}

export default function FoodDetailModal({ item, onClose }: FoodDetailModalProps) {
  const itemReviews = allReviews.filter(r => r.foodId === item.id);

  const getTasteBarColor = (level: number) => {
    if (level >= 7) return 'bg-[#8B6F47]';
    if (level >= 4) return 'bg-[#A88D6F]';
    return 'bg-[#D4C4B0]';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="min-h-screen px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp">
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 md:h-96 lg:h-[32rem] object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-full hover:bg-white transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-[#3D2817]" />
            </button>
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#3D2817]/95 text-white text-sm md:text-base px-5 py-2.5 rounded-full backdrop-blur-md font-semibold shadow-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-10 lg:p-12">
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#3D2817] mb-3 tracking-tight">
                  {item.name}
                </h2>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
                    <span className="font-bold text-[#3D2817] text-xl">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-[#6B4E3D] text-base">
                    ({item.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-4xl md:text-5xl font-bold text-[#8B6F47] tracking-tight">
                  ${item.price}
                </span>
              </div>
            </div>

            <p className="text-lg text-[#4A3426] leading-relaxed mb-8 max-w-3xl">
              {item.description}
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#F5E6D3] to-[#EDD9C0] rounded-3xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <ChefHat className="w-6 h-6 text-[#8B6F47]" />
                  <h3 className="font-bold text-[#3D2817] text-xl md:text-2xl">
                    Main Ingredients
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm md:text-base text-[#4A3426] font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {item.allergens.length > 0 && (
                <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-3xl p-6 md:p-8 border-2 border-red-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <h3 className="font-bold text-red-900 text-xl md:text-2xl">
                      Allergen Information
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {item.allergens.map((allergen) => (
                      <span
                        key={allergen}
                        className="bg-red-100 px-5 py-2.5 rounded-full text-sm md:text-base text-red-800 font-medium border-2 border-red-300 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-br from-[#F5E6D3] to-[#EDD9C0] rounded-3xl p-6 md:p-8 shadow-lg">
                <h3 className="font-bold text-[#3D2817] text-xl md:text-2xl mb-6">
                  Taste Profile
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <Candy className="w-5 h-5 text-[#8B6F47]" />
                        <span className="text-base font-semibold text-[#3D2817]">
                          Sweet
                        </span>
                      </div>
                      <span className="text-base font-bold text-[#6B4E3D]">
                        {item.tasteProfile.sweet}/10
                      </span>
                    </div>
                    <div className="h-3 bg-white/80 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full ${getTasteBarColor(item.tasteProfile.sweet)} transition-all duration-700 ease-out rounded-full`}
                        style={{ width: `${item.tasteProfile.sweet * 10}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <Flame className="w-5 h-5 text-[#8B6F47]" />
                        <span className="text-base font-semibold text-[#3D2817]">
                          Spicy
                        </span>
                      </div>
                      <span className="text-base font-bold text-[#6B4E3D]">
                        {item.tasteProfile.spicy}/10
                      </span>
                    </div>
                    <div className="h-3 bg-white/80 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full ${getTasteBarColor(item.tasteProfile.spicy)} transition-all duration-700 ease-out rounded-full`}
                        style={{ width: `${item.tasteProfile.spicy * 10}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <ChefHat className="w-5 h-5 text-[#8B6F47]" />
                        <span className="text-base font-semibold text-[#3D2817]">
                          Savory
                        </span>
                      </div>
                      <span className="text-base font-bold text-[#6B4E3D]">
                        {item.tasteProfile.savory}/10
                      </span>
                    </div>
                    <div className="h-3 bg-white/80 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full ${getTasteBarColor(item.tasteProfile.savory)} transition-all duration-700 ease-out rounded-full`}
                        style={{ width: `${item.tasteProfile.savory * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {itemReviews.length > 0 && (
                <div>
                  <h3 className="font-bold text-[#3D2817] text-2xl md:text-3xl mb-6">
                    Customer Reviews
                  </h3>
                  <div className="space-y-4">
                    {itemReviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
