"use client";

import { useState } from "react";
import { HomeShell } from "@/components/HomeShell";
import { SearchBar } from "@/components/SearchBar";
import { foodData, categories, type FoodItem, type Category } from "@/lib/foodData";
import { CategoryCard, FoodItemCard } from "@/components/FoodCard";
import Link from "next/link";

const CategorySection = ({
  title,
  link,
  cat,
}: {
  title: string;
  link: string;
  cat: Category[];
}) => {
  return (
    <section className="space-y-8.25 md:space-y-12.5">
      <h2 className="text-center sect-title md:page-subhead">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {cat.slice(0, 6).map((category) => (
          <Link key={category.id} href={`/menu?category=${encodeURIComponent(category.title)}`} className="contents">
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>

      <p className="text-center regular text-[#1E88E5] hover:underline">
        <Link href="/menu">View All {link}</Link>
      </p>
    </section>
  );
};

const ChefSpecialsSection = ({
  title,
  link,
  items,
}: {
  title: string;
  link: string
  items: FoodItem[];
}) => {
  return (
    <section className="space-y-8.25 md:space-y-12.5">
      <h2 className="text-center sect-title md:page-subhead">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {items.slice(0, 6).map((food) => (
          <FoodItemCard food={food} variant="chefSpecial" key={food.id} />
        ))}
      </div>

      <p className="text-center regular text-[#1E88E5] hover:underline">
        <Link href="/menu">View All {link}</Link>
      </p>
    </section>
  );
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const isSearching = searchQuery.trim().length > 0;

  const SearchResults = foodData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const popularCategoryItems = categories.filter(cat => cat.isPopular);

  return (
    <HomeShell>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className="px-4.5 md:px-12 pt-22 pb-24">
        <div>
          {!isSearching && (
            <div className="space-y-48 md:space-y-65.75">
              <CategorySection
                title="Popular Categories"
                link="Categories"
                cat={popularCategoryItems}
              />

              <ChefSpecialsSection
                title="Chef Specials"
                link="Specials"
                items={foodData.filter((item) => item.isChefSpecial)}
              />
            </div>
          )}

          {isSearching && (
            <section className="space-y-12.5">
              <h2 className="text-center page-subhead">Search results</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-17.5 justify-items-center">
                {SearchResults.map((food) => (
                  <FoodItemCard food={food} variant="chefSpecial" key={food.id} />
                ))}
                {SearchResults.length === 0 && (
                  <p className="text-center py-20 regular">
                    No items found. Try a different search!
                  </p>
                )}
              </div>
            </section>
          )}
        </div>
      </section>
    </HomeShell>
  );
}