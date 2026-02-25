export interface Category {
  id: string;
  title: string;
  image: string;
  isPopular?: boolean;
}

export interface FoodItem {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  category: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
}

export const categories: Category[] = [
  {
    id: "Popular",
    title: "Popular",
    image: "",
  },
  {
    id: "Jollof Delights",
    title: "Jollof Rice & Entrees",
    image: "/food/category/jollof-cat.jpg",
    isPopular: true,
  },
  {
    id: "Swallows & Soups",
    title: "Swallows & Soups",
    image: "/food/category/swallows-cat.jpg",
    isPopular: true,
  },
  {
    id: "Peppered",
    title: "Peppered",
    image: "/food/category/peppered-cat.jpg",
    isPopular: true,
  },
  {
    id: "Grills & BBQ",
    title: "Grills & Sides",
    image: "/food/category/grills-cat.jpg",
    isPopular: true,
  },
  {
    id: "Beverages",
    title: "Beverages",
    image: "/food/category/beverages-cat.jpg",
    isPopular: true,
  },
  {
    id: "Sweet Treats",
    title: "Desserts",
    image: "/food/category/sweets-cat.jpg",
    isPopular: true,
  },
];

export const foodData: FoodItem[] = [
  {
    id: "spec-001",
    title: "Spicy Tilapia Pepper Soup",
    price: "₦3,500",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    imageUrl: "/food/food-items/tilapia-pepper-soup.jpg",
    category: "Peppered",
    isChefSpecial: true,
  },
  {
    id: "spec-002",
    title: "Jollof Rice & Fried Chicken",
    price: "₦3,500",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    imageUrl: "/food/food-items/jollof-chicken.jpg",
    category: "Jollof Rice & Entrees",
    isChefSpecial: true,
  },
  {
    id: "spec-003",
    title: "Jollof Rice & Smoked Fish",
    price: "₦3,500",
    description: "Flavorful jollof rice served with perfectly smoked fish.",
    imageUrl: "/food/food-items/jollof-smoked-fish.jpg",
    category: "Jollof Rice & Entrees",
    isChefSpecial: true,
  },
  {
    id: "spec-004",
    title: "Jollof Rice & Smoked Chicken",
    price: "₦3,500",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent Smoked chicken.",
    imageUrl: "/food/food-items/jollof-chicken.jpg",
    category: "Jollof Rice & Entrees",
    isChefSpecial: true,
  },
  {
    id: "spec-005",
    title: "Jollof Rice, Plantain & Chicken",
    price: "₦3,500",
    description:
      "Our signature Jollof rice, cooked to perfection, served with fried plantains and chicken.",
    imageUrl: "/food/food-items/jollof-plantain.jpg",
    category: "Jollof Rice & Entrees",
    isChefSpecial: true,
  },
  {
    id: "spec-006",
    title: "Egusi Soup & Pounded Yam",
    price: "₦3,500",
    description:
      "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    imageUrl: "/food/food-items/egusi-pounded-yam.jpg",
    category: "Swallows & Soups",
    isChefSpecial: true,
  },
  {
    id: "food-00",
    title: "Eba & Egusi Soup (Goat Meat)",
    price: "₦8,200",
    description:
      "Smooth yellow garri served with rich, nutty melon seed soup containing chunks of tender goat meat.",
    imageUrl: "/food/eba-egusi.jpg",
    category: "Popular",
  },
  {
    id: "food-004",
    title: "Pounded Yam & Efo-Riro",
    price: "₦9,000",
    description:
      "Authentic stretchy pounded yam paired with a vibrant rich spinach stew loaded with assorted meats.",
    imageUrl: "/food/pounded-yam-efo.jpg",
    category: "Popular",
  },
  {
    id: "food-005",
    title: "Native Rice & Smoked Fish",
    price: "₦7,000",
    description:
      "Traditional palm oil rice cooked with locust beans (iru), crayfish, and flakes of smoked mudfish.",
    imageUrl: "/food/native-rice.jpg",
    category: "Chef's Specials",
    isChefSpecial: true,
  },
  {
    id: "food-006",
    title: "Banku with Okro Soup & Crab",
    price: "₦10,500",
    description:
      "Fermented corn and cassava dough served with a deluxe seafood okra soup featuring fresh crab and shrimp.",
    imageUrl: "/food/banku-okro.jpg",
    category: "Swallow & Soups",
  },
  {
    id: "food-007",
    title: "Pounded Yam & Okro Soup",
    price: "₦8,500",
    description:
      "Soft, smooth pounded yam served with a thick, traditional okra soup and assorted beef.",
    imageUrl: "/food/pounded-yam-okro.jpg",
    category: "Swallow & Soups",
  },
  {
    id: "food-008",
    title: "Amala & Abula",
    price: "₦7,500",
    description:
      "Lafun (yam flour) served with a traditional mix of Gbegiri (bean soup) and Ewedu (jute leaves).",
    imageUrl: "/food/amala-abula.jpg",
    category: "Swallow & Soups",
  },
];
