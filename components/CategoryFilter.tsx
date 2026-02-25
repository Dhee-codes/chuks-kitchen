import type { Category } from "@/lib/foodData";

export const CategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: Category[]
  activeCategory: string
  setActiveCategory: (query: string) => void
}) => {
  return (
    <aside className="w-full md:w-64 space-y-2">
      <h2 className="text-lg font-bold mb-4">Menu Categories</h2>
      <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.title)}
            className={`text-left px-4 py-3 rounded-lg transition-all ${
              activeCategory === cat.title
                ? "bg-orange-100 text-orange-600 font-bold"
                : "hover:bg-slate-50 text-slate-600"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </aside>
  );
};
