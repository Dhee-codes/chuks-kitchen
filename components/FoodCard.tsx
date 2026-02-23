import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type FoodData } from "@/lib/foodData";

export function FoodCard({ title, description, price, imageUrl }: FoodData ) {
  return (
    <Card className="overflow-hidden rounded-2xl border-none shadow-sm transition-hover hover:shadow-md">
      {/* 1. Image Container with Fixed Aspect Ratio */}
      <div className="relative aspect-square w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* 2. Content Section */}
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-slate-900 line-clamp-1">{title}</h3>
          {price && (
            <span className="text-sm font-semibold text-orange-600">
              {price}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-1 text-xs text-slate-500 line-clamp-2">
            {description}
          </p>
        )}
      </CardContent>

      {/* 3. Action Section */}
      <CardFooter className="p-4 pt-0">
        <Button
          variant="outline"
          className="w-full h-9 rounded-xl border-orange-200 text-orange-600 hover:bg-orange-50"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
