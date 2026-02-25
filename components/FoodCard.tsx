import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { FoodItem, Category } from "@/lib/foodData";
import { Plus } from "lucide-react";

type FoodCardProps = {
  food: FoodItem;
  variant?: "chefSpecial" | "menu";
};

type CategoryProps = {
  category: Category;
};

export const FoodItemCard = ({ food, variant }: FoodCardProps) => {
  switch (variant) {
    case "chefSpecial":
      return (
        <Card
          className="overflow-hidden w-full max-w-97.5 bg-card border-none space-y-6.25">
          <div className="relative aspect-358/222 md:aspect-390/222 w-full">
            <Image
              src={food.imageUrl}
              alt={food.title}
              fill
              className="object-cover"
            />
          </div>

          <CardContent>
            <h3 className="semi-bold line-clamp-1 mb-1.75">
              {food.title}
            </h3>
            <p className="page-subhead line-clamp-3">{food.description}</p>
          </CardContent>

          <CardFooter className="px-3.5 pb-11.5">
            <div className="page-subhead text-primary">{food.price}</div>
            <Button className="px-9.5 py-7">Add to cart</Button>
          </CardFooter>
        </Card>
      );
  
    case "menu":
      return (
        <Card className="overflow-hidden grid grid-cols-[110px_1fr] md:grid-cols-1 gap-2.75 md:gap-9.75 w-full max-w-97.5 bg-card border-none rounded-md p-1.5 md:p-0">
          <div className="relative aspect-108/99 md:aspect-390/222 rounded-[3.18px] overflow-hidden">
            <Image
              src={food.imageUrl}
              alt={food.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:gap-9.75 h-full">
            <CardContent className="px-0 md:px-4.25 flex flex-col flex-1 gap-1">
              <h3 className="title-md md:semi-bold line-clamp-1">{food.title}</h3>
              <p className="caption md:regular line-clamp-3">
                {food.description}
              </p>
            </CardContent>

            <CardFooter className="md:pb-11.5 md:px-3.5">
              <div className="page-subhead md:regular text-primary">{food.price}</div>
              <button className="p-1 rounded-full bg-primary hover:bg-accent text-primary-foreground">
                <span className="sr-only">Add to cart</span>
                <Plus className="size-4 md:size-6" />
              </button>
            </CardFooter>
          </div>
        </Card>
      );
  }
};

export const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <Card className="overflow-hidden w-full max-w-97.5 bg-card border-none">
      <div className="relative aspect-358/222 md:aspect-390/222 w-full">
        <Image
          src={category.image}
          alt={category.id}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="pt-2.5 pb-4.5 md:pt-12.5 md:pb-21.25">
        <h3 className="text-center small md:semi-bold line-clamp-1">
          {category.id}
        </h3>
      </CardContent>
    </Card>
  );
}
