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
    <div className="md:px-9.5 md:pt-20.5">
      <aside className="w-full bg-card pb-20.75 md:pb-2 md:rounded-xl">
        <h2 className="sect-title font-semibold px-6.5 pt-9 pb-7">
          Menu Categories
        </h2>
        <div className="flex flex-col overflow-hidden">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.title)}
              className={`pl-6 pr-2.75 py-5.75 text-left sect-title ${
                activeCategory === cat.title
                  ? "bg-muted border-l-4 border-primary"
                  : "hover:bg-muted border-l-4 border-transparent"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};
