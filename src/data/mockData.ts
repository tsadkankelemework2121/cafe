export interface FoodItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  ingredients: string[];
  allergens: string[];
  tasteProfile: {
    sweet: number;
    spicy: number;
    savory: number;
  };
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: string;
  foodId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: 'Coffee',
    description: 'Start your day right'
  },
  {
    id: 'mains',
    name: 'Main Dishes',
    icon: 'UtensilsCrossed',
    description: 'Signature dishes'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: 'Wine',
    description: 'Refreshing beverages'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: 'IceCream',
    description: 'Sweet endings'
  }
];

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Avocado Toast Deluxe',
    category: 'breakfast',
    description: 'Smashed avocado on sourdough with poached eggs, cherry tomatoes, and microgreens',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vegetarian', 'Popular'],
    ingredients: ['Avocado', 'Sourdough Bread', 'Eggs', 'Cherry Tomatoes', 'Microgreens', 'Olive Oil'],
    allergens: ['Gluten', 'Eggs'],
    tasteProfile: { sweet: 2, spicy: 1, savory: 8 },
    rating: 4.8,
    reviewCount: 127
  },
  {
    id: '2',
    name: 'Belgian Waffles',
    category: 'breakfast',
    description: 'Fluffy waffles topped with fresh berries, whipped cream, and maple syrup',
    price: 12.99,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Sweet', 'Popular'],
    ingredients: ['Flour', 'Eggs', 'Milk', 'Butter', 'Fresh Berries', 'Maple Syrup', 'Whipped Cream'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    tasteProfile: { sweet: 9, spicy: 0, savory: 2 },
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: '3',
    name: 'Grilled Salmon Fillet',
    category: 'mains',
    description: 'Atlantic salmon with lemon butter sauce, served with roasted vegetables and wild rice',
    price: 28.99,
    image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Healthy', 'Gluten-Free'],
    ingredients: ['Salmon', 'Lemon', 'Butter', 'Wild Rice', 'Asparagus', 'Carrots', 'Bell Peppers'],
    allergens: ['Fish', 'Dairy'],
    tasteProfile: { sweet: 2, spicy: 1, savory: 9 },
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Truffle Mushroom Risotto',
    category: 'mains',
    description: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan',
    price: 24.99,
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vegetarian', 'Premium'],
    ingredients: ['Arborio Rice', 'Wild Mushrooms', 'Truffle Oil', 'Parmesan', 'White Wine', 'Vegetable Stock'],
    allergens: ['Dairy', 'Alcohol'],
    tasteProfile: { sweet: 1, spicy: 0, savory: 10 },
    rating: 4.9,
    reviewCount: 189
  },
  {
    id: '5',
    name: 'Spicy Thai Curry',
    category: 'mains',
    description: 'Red curry with coconut milk, vegetables, and your choice of protein',
    price: 18.99,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Spicy', 'Gluten-Free', 'New'],
    ingredients: ['Coconut Milk', 'Red Curry Paste', 'Bell Peppers', 'Bamboo Shoots', 'Basil', 'Jasmine Rice'],
    allergens: ['Shellfish'],
    tasteProfile: { sweet: 3, spicy: 9, savory: 7 },
    rating: 4.6,
    reviewCount: 94
  },
  {
    id: '6',
    name: 'Craft Lemonade',
    category: 'drinks',
    description: 'Fresh-squeezed lemonade with mint and a hint of lavender',
    price: 5.99,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Refreshing', 'Vegan'],
    ingredients: ['Lemon', 'Sugar', 'Mint', 'Lavender', 'Water'],
    allergens: [],
    tasteProfile: { sweet: 7, spicy: 0, savory: 0 },
    rating: 4.5,
    reviewCount: 78
  },
  {
    id: '7',
    name: 'Espresso Martini',
    category: 'drinks',
    description: 'Classic cocktail with vodka, espresso, and coffee liqueur',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Cocktail', 'Popular'],
    ingredients: ['Vodka', 'Espresso', 'Coffee Liqueur', 'Sugar Syrup'],
    allergens: ['Alcohol'],
    tasteProfile: { sweet: 6, spicy: 0, savory: 2 },
    rating: 4.8,
    reviewCount: 142
  },
  {
    id: '8',
    name: 'Chocolate Lava Cake',
    category: 'desserts',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Sweet', 'Popular'],
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Vanilla Ice Cream'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    tasteProfile: { sweet: 10, spicy: 0, savory: 1 },
    rating: 5.0,
    reviewCount: 267
  },
  {
    id: '9',
    name: 'Tiramisu',
    category: 'desserts',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone',
    price: 8.99,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Classic', 'Coffee'],
    ingredients: ['Mascarpone', 'Ladyfingers', 'Espresso', 'Cocoa Powder', 'Eggs', 'Marsala Wine'],
    allergens: ['Gluten', 'Dairy', 'Eggs', 'Alcohol'],
    tasteProfile: { sweet: 8, spicy: 0, savory: 2 },
    rating: 4.7,
    reviewCount: 178
  },
  {
    id: '10',
    name: 'French Toast Brioche',
    category: 'breakfast',
    description: 'Thick-cut brioche soaked in vanilla custard, grilled to golden perfection, served with maple syrup and fresh berries',
    price: 13.99,
    image: 'https://images.pexels.com/photos/2135/food-photography-sweet-dessert-baking.jpg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Popular', 'Sweet'],
    ingredients: ['Brioche Bread', 'Eggs', 'Heavy Cream', 'Vanilla Extract', 'Butter', 'Maple Syrup', 'Fresh Berries'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    tasteProfile: { sweet: 8, spicy: 0, savory: 3 },
    rating: 4.8,
    reviewCount: 165
  },
  {
    id: '11',
    name: 'Eggs Benedict',
    category: 'breakfast',
    description: 'Poached eggs on English muffins with Canadian bacon, topped with rich hollandaise sauce',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Classic', 'Premium'],
    ingredients: ['English Muffins', 'Eggs', 'Canadian Bacon', 'Butter', 'Lemon', 'Hollandaise Sauce', 'Chives'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    tasteProfile: { sweet: 1, spicy: 0, savory: 9 },
    rating: 4.9,
    reviewCount: 198
  },
  {
    id: '12',
    name: 'Acai Bowl',
    category: 'breakfast',
    description: 'Blended acai topped with granola, fresh fruits, coconut flakes, and honey drizzle',
    price: 11.99,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Healthy', 'Vegan'],
    ingredients: ['Acai Puree', 'Banana', 'Granola', 'Strawberries', 'Blueberries', 'Coconut Flakes', 'Honey'],
    allergens: [],
    tasteProfile: { sweet: 7, spicy: 0, savory: 1 },
    rating: 4.6,
    reviewCount: 112
  },
  {
    id: '13',
    name: 'Wagyu Beef Steak',
    category: 'mains',
    description: 'Premium A5 Wagyu ribeye, dry-aged 28 days, served with truffle mashed potatoes and seasonal vegetables',
    price: 89.99,
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-chop-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Premium', 'New'],
    ingredients: ['A5 Wagyu Ribeye', 'Truffle', 'Potatoes', 'Butter', 'Asparagus', 'Cherry Tomatoes', 'Rosemary'],
    allergens: [],
    tasteProfile: { sweet: 1, spicy: 0, savory: 10 },
    rating: 5.0,
    reviewCount: 87
  },
  {
    id: '14',
    name: 'Lobster Thermidor',
    category: 'mains',
    description: 'Fresh lobster in creamy cognac sauce, gratinated with parmesan and served with saffron rice',
    price: 42.99,
    image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Premium', 'Seafood'],
    ingredients: ['Lobster', 'Cognac', 'Heavy Cream', 'Parmesan', 'Saffron', 'Jasmine Rice', 'Tarragon'],
    allergens: ['Shellfish', 'Dairy', 'Alcohol'],
    tasteProfile: { sweet: 2, spicy: 0, savory: 9 },
    rating: 4.8,
    reviewCount: 134
  },
  {
    id: '15',
    name: 'Vegetarian Wellington',
    category: 'mains',
    description: 'Mushroom and lentil filling wrapped in puff pastry, served with red wine reduction',
    price: 22.99,
    image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vegetarian', 'Popular'],
    ingredients: ['Puff Pastry', 'Portobello Mushrooms', 'Lentils', 'Spinach', 'Red Wine', 'Shallots', 'Thyme'],
    allergens: ['Gluten', 'Alcohol'],
    tasteProfile: { sweet: 2, spicy: 0, savory: 8 },
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '16',
    name: 'Osso Buco',
    category: 'mains',
    description: 'Braised veal shanks in white wine and broth, served with saffron risotto Milanese',
    price: 34.99,
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-chop-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Classic', 'Premium'],
    ingredients: ['Veal Shanks', 'White Wine', 'Veal Stock', 'Saffron Risotto', 'Gremolata', 'Carrots', 'Celery'],
    allergens: ['Dairy', 'Alcohol'],
    tasteProfile: { sweet: 1, spicy: 0, savory: 10 },
    rating: 4.9,
    reviewCount: 143
  },
  {
    id: '17',
    name: 'Matcha Latte',
    category: 'drinks',
    description: 'Premium Japanese matcha whisked with steamed oat milk, sweetened with honey',
    price: 6.99,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Healthy', 'Vegan'],
    ingredients: ['Matcha Powder', 'Oat Milk', 'Honey', 'Hot Water'],
    allergens: [],
    tasteProfile: { sweet: 4, spicy: 0, savory: 1 },
    rating: 4.7,
    reviewCount: 189
  },
  {
    id: '18',
    name: 'Craft Old Fashioned',
    category: 'drinks',
    description: 'Premium bourbon with orange bitters, muddled with a sugar cube and orange peel',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Cocktail', 'Premium'],
    ingredients: ['Bourbon', 'Orange Bitters', 'Sugar Cube', 'Orange Peel', 'Angostura Bitters'],
    allergens: ['Alcohol'],
    tasteProfile: { sweet: 3, spicy: 0, savory: 2 },
    rating: 4.8,
    reviewCount: 167
  },
  {
    id: '19',
    name: 'Fresh Orange Juice',
    category: 'drinks',
    description: 'Cold-pressed fresh oranges, served chilled',
    price: 5.99,
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Fresh', 'Healthy'],
    ingredients: ['Fresh Oranges'],
    allergens: [],
    tasteProfile: { sweet: 8, spicy: 0, savory: 0 },
    rating: 4.5,
    reviewCount: 98
  },
  {
    id: '20',
    name: 'Cappuccino',
    category: 'drinks',
    description: 'Double espresso with steamed milk and velvety microfoam, dusted with cocoa',
    price: 5.49,
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Coffee', 'Popular'],
    ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam', 'Cocoa Powder'],
    allergens: ['Dairy'],
    tasteProfile: { sweet: 3, spicy: 0, savory: 2 },
    rating: 4.8,
    reviewCount: 234
  },
  {
    id: '21',
    name: 'Crème Brûlée',
    category: 'desserts',
    description: 'Classic French custard with a crisp caramelized sugar top, served with fresh berries',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Classic', 'Premium'],
    ingredients: ['Heavy Cream', 'Egg Yolks', 'Sugar', 'Vanilla Bean', 'Fresh Berries'],
    allergens: ['Dairy', 'Eggs'],
    tasteProfile: { sweet: 9, spicy: 0, savory: 1 },
    rating: 4.9,
    reviewCount: 201
  },
  {
    id: '22',
    name: 'Strawberry Cheesecake',
    category: 'desserts',
    description: 'New York-style cheesecake with graham cracker crust, topped with fresh strawberries',
    price: 10.99,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Popular', 'Classic'],
    ingredients: ['Cream Cheese', 'Graham Crackers', 'Sugar', 'Fresh Strawberries', 'Sour Cream', 'Vanilla'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    tasteProfile: { sweet: 9, spicy: 0, savory: 1 },
    rating: 4.8,
    reviewCount: 223
  },
  {
    id: '23',
    name: 'Lemon Tart',
    category: 'desserts',
    description: 'Zesty lemon curd in a buttery shortcrust pastry, finished with meringue peaks',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Tart', 'Refreshing'],
    ingredients: ['Shortcrust Pastry', 'Lemon Curd', 'Eggs', 'Butter', 'Sugar', 'Meringue'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    tasteProfile: { sweet: 7, spicy: 0, savory: 1 },
    rating: 4.7,
    reviewCount: 145
  },
  {
    id: '24',
    name: 'Chocolate Soufflé',
    category: 'desserts',
    description: 'Light and airy chocolate soufflé, served warm with vanilla ice cream',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Premium', 'Popular'],
    ingredients: ['Dark Chocolate', 'Eggs', 'Butter', 'Sugar', 'Cocoa Powder', 'Vanilla Ice Cream'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    tasteProfile: { sweet: 10, spicy: 0, savory: 1 },
    rating: 4.9,
    reviewCount: 178
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    foodId: '1',
    author: 'Sarah Martinez',
    rating: 5,
    comment: 'Absolutely delicious! The avocado was perfectly ripe and the eggs were cooked to perfection.',
    date: '2024-12-15'
  },
  {
    id: 'r2',
    foodId: '1',
    author: 'James Wilson',
    rating: 4,
    comment: 'Great breakfast option. Generous portion size.',
    date: '2024-12-10'
  },
  {
    id: 'r3',
    foodId: '2',
    author: 'Emily Chen',
    rating: 5,
    comment: 'Best waffles in town! Light, fluffy, and the berries were so fresh.',
    date: '2024-12-18'
  },
  {
    id: 'r4',
    foodId: '3',
    author: 'Michael Brown',
    rating: 5,
    comment: 'The salmon was cooked perfectly. Very fresh and flavorful.',
    date: '2024-12-12'
  },
  {
    id: 'r5',
    foodId: '4',
    author: 'Sofia Rodriguez',
    rating: 5,
    comment: 'The truffle oil adds such a rich flavor. Worth every penny!',
    date: '2024-12-14'
  },
  {
    id: 'r6',
    foodId: '5',
    author: 'David Kim',
    rating: 4,
    comment: 'Authentic Thai flavors. Quite spicy but absolutely delicious!',
    date: '2024-12-16'
  },
  {
    id: 'r7',
    foodId: '8',
    author: 'Lisa Anderson',
    rating: 5,
    comment: 'The molten center is perfection! Best dessert on the menu.',
    date: '2024-12-17'
  },
  {
    id: 'r8',
    foodId: '8',
    author: 'Tom Baker',
    rating: 5,
    comment: 'Rich, decadent, and the ice cream pairs perfectly with the warm cake.',
    date: '2024-12-11'
  },
  {
    id: 'r9',
    foodId: '10',
    author: 'Jessica Taylor',
    rating: 5,
    comment: 'The brioche French toast is absolutely divine! Perfectly crispy on the outside and soft inside.',
    date: '2024-12-19'
  },
  {
    id: 'r10',
    foodId: '11',
    author: 'Robert Chen',
    rating: 5,
    comment: 'Best Eggs Benedict I\'ve ever had. The hollandaise sauce is perfect!',
    date: '2024-12-16'
  },
  {
    id: 'r11',
    foodId: '13',
    author: 'Amanda Foster',
    rating: 5,
    comment: 'The Wagyu steak melts in your mouth. Worth every penny for this premium experience!',
    date: '2024-12-20'
  },
  {
    id: 'r12',
    foodId: '14',
    author: 'Charles Williams',
    rating: 5,
    comment: 'Incredible lobster thermidor. The cognac sauce is rich and flavorful.',
    date: '2024-12-18'
  },
  {
    id: 'r13',
    foodId: '17',
    author: 'Maya Patel',
    rating: 5,
    comment: 'The matcha latte is so smooth and perfectly balanced. My new favorite drink!',
    date: '2024-12-17'
  },
  {
    id: 'r14',
    foodId: '21',
    author: 'Daniel Lee',
    rating: 5,
    comment: 'Perfect crème brûlée with that satisfying crack. The custard is silky smooth.',
    date: '2024-12-15'
  },
  {
    id: 'r15',
    foodId: '24',
    author: 'Olivia Davis',
    rating: 5,
    comment: 'The soufflé is like a cloud of chocolate heaven. Absolutely perfect!',
    date: '2024-12-19'
  }
];
