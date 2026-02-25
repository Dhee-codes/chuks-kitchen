"use client";

import { useState } from "react";
import { CategoryFilter } from "@/components/CategoryFilter";
import { categories, foodData } from "@/lib/foodData";
import { FoodItemCard } from "@/components/FoodCard";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Popular");

  const filteredFood = foodData.filter((item) => {
    if (activeCategory === "Popular") {
      return item.isPopular === true;
    }
    return item.category === activeCategory;
  });

  return (
    <section>
      <div className="relative w-full aspect-390/496 md:aspect-1440/586 bg-[url(/home/hero-bg.png)] md:bg-[url(/menu/menu-hero-bg.png)] bg-top">
        <div className="absolute inset-0 bg-black/30 md:bg-black/45 flex flex-col justify-center gap-5 md:gap-2.75 text-primary-foreground px-2 md:px-12">
          <h1 className="page-head">Chuks Kitchen</h1>
          <p className="page-subhead">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </p>
        </div>
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section className="flex-1 px-4.5 md:px-12 pt-22 pb-24">
        <h1 className="text-2xl font-bold mb-6">{activeCategory}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-17.5 justify-items-center">
          {filteredFood.map((food) => (
            <FoodItemCard food={food} variant="menu" key={food.id} />
          ))}
        </div>

        {filteredFood.length === 0 && (
          <p className="text-center py-20 regular">
            No items found. Try a different category!
          </p>
        )}
      </section>
    </section>
  );
}
