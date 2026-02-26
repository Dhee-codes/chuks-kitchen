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
    title: "Jollof Rice & Fried Chicken",
    price: "₦3,500",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    imageUrl: "/food/food-items/jollof-chicken.jpg",
    category: "Jollof Rice & Entrees",
    isPopular: true,
    isChefSpecial: true,
  },
  {
    id: "food-001",
    title: "Eba & Egusi Soup (Goat Meat)",
    price: "₦3,500",
    description:
      "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    imageUrl: "/food/food-items/eba-egusi-ewu.jpg",
    category: "Swallows & Soups",
    isPopular: true,
  },
  {
    id: "food-002",
    title: "Pounded Yam & Edikaikong",
    price: "₦3,800",
    description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
    imageUrl: "/food/food-items/pounded-yam-edi.jpg",
    category: "Swallows & Soups",
    isPopular: true,
  },
  {
    id: "food-003",
    title: "Peppered Snail",
    price: "₦2,500",
    description: "Spicy and savory peppered snail, perfect as a starter.",
    imageUrl: "/food/food-items/peppered-snail.jpg",
    category: "Peppered",
    isPopular: true,
  },
  {
    id: "food-004",
    title: "Grilled Tilapia Fish",
    price: "₦4,500",
    description: "Whole grilled tilapia seasoned with our special spices.",
    imageUrl: "/food/food-items/grilled-tilapia.jpg",
    category: "Grills & Sides",
    isPopular: true,
  },
  {
    id: "spec-002",
    title: "Jollof Rice & Smoked Fish",
    price: "₦3,500",
    description: "Flavorful jollof rice served with perfectly smoked fish.",
    imageUrl: "/food/food-items/jollof-smoked-fish.jpg",
    category: "Jollof Rice & Entrees",
    isPopular: true,
    isChefSpecial: true,
  },
  {
    id: "spec-003",
    title: "Spicy Tilapia Pepper Soup",
    price: "₦3,500",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    imageUrl: "/food/food-items/tilapia-pepper-soup.jpg",
    category: "Peppered",
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
    id: "food-005",
    title: "Party Jollof Rice (Veg)",
    price: "₦2,800",
    description: "Vegetarian party jollof, full of rich flavors.",
    imageUrl: "/food/food-items/party-jollof-veg.jpg",
    category: "Jollof Rice & Entrees",
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
    id: "food-006",
    title: "Amala with Gbegiri & Ewedu",
    price: "₦3,100",
    description:
      "Classic Amala served with Gbegiri (beans) and Ewedu (jute lesf) soup.",
    imageUrl: "/food/food-items/amala-ewedu.jpg",
    category: "Swallow & Soups",
  },
  {
    id: "food-007",
    title: "Fufu & Okra Soup (Fish)",
    price: "₦3,700",
    description: "Light Fufu served with fresh okra soup and tilapia fish.",
    imageUrl: "/food/food-items/fufu-okra.jpg",
    category: "Swallow & Soups",
  },
  {
    id: "food-008",
    title: "Suya Spiced Grilled Fish",
    price: "₦12,500",
    description:
      "Whole croaker fish marinated in authentic Yaji spice, grilled over open flames for a smoky finish.",
    imageUrl: "/food/food-items/grilled-suya-fish.jpg",
    category: "Grills & Sides",
  },
  {
    id: "food-009",
    title: "Signature Zobo Infusion",
    price: "₦1,500",
    description:
      "Chilled hibiscus flower extract infused with ginger, cloves, and a hint of pineapple sweetness.",
    imageUrl: "/food/food-items/zobo.jpg",
    category: "Beverages",
  },
  {
    id: "food-010",
    title: "Puff Puff with Chin Chin",
    price: "₦3,000",
    description:
      "Traditional deep-fried dough balls and chin chin.",
    imageUrl: "/food/food-items/puff-puff.jpg",
    category: "Desserts",
  },
];