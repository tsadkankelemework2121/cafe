import { useState } from 'react';
import { Utensils } from 'lucide-react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import FoodCard from './components/FoodCard';
import FoodDetailModal from './components/FoodDetailModal';
import { categories, foodItems, FoodItem } from './data/mockData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const filteredItems = selectedCategory
    ? foodItems.filter(item => item.category === selectedCategory)
    : [];

  const getCategoryName = () => {
    const category = categories.find(c => c.id === selectedCategory);
    return category?.name || '';
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF4ED] via-[#F5E6D3] to-[#EDD9C0] bg-fixed">
      <Header
        onBack={handleBackToHome}
        title={selectedCategory ? getCategoryName() : undefined}
        showBackButton={!!selectedCategory}
      />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {!selectedCategory ? (
          <div className="space-y-12 md:space-y-16">
            <div className="text-center space-y-6 py-12 md:py-16">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-[#3D2817] to-[#4A3426] p-8 rounded-full shadow-2xl">
                  <Utensils className="w-14 h-14 md:w-16 md:h-16 text-[#F5E6D3]" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D2817] leading-tight tracking-tight">
                Welcome to La Maison
              </h2>
              <p className="text-xl md:text-2xl text-[#6B4E3D] max-w-3xl mx-auto leading-relaxed">
                Experience culinary excellence with our thoughtfully crafted menu.
                Each dish tells a story of flavor, tradition, and passion.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#3D2817] mb-8 md:mb-10">
                Explore Our Menu
              </h3>
              <div className="flex gap-5 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-1">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    onClick={() => setSelectedCategory(category.id)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3D2817] to-[#4A3426] text-white rounded-3xl p-10 md:p-12 text-center shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Tap any category above to explore our delicious offerings.
                Each item includes detailed ingredients, allergen information, and reviews from our valued guests.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-[#6B4E3D] text-lg md:text-xl mb-8 md:mb-10 font-medium">
              {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} available
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedFood(item)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {selectedFood && (
        <FoodDetailModal
          item={selectedFood}
          onClose={() => setSelectedFood(null)}
        />
      )}
    </div>
  );
}

export default App;
