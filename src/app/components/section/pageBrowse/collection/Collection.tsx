"use client";

import { collectionVariants } from "./collectionVariants";
import { Card } from "@/app/components/card/Card";
import { CardContent } from "@/app/components/cardContent/CardContent";
import Image from "next/image";
import { Badge } from "@/app/components/badge/Badge";
import { fetchCollection } from "@/api/browse/fetchGenre";

const { section } = collectionVariants();

const { collections } = await fetchCollection();

export const Collection = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">특별 컬렉션</h3>
      <div className="space-y-6 mb-10">
        {collections.map((collection, i) => (
          <Card
            key={i}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-default bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            onClick={() => {}}
          >
            <CardContent variant="default">
              <div className="flex items-center p-2">
                <div className="relative w-32 h-32 bg-gray-200 dark:bg-gray-700 flex-shrink-0 p-2">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" // 예시
                    fill
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="flex-1 px-4 max-h-28">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {collection.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                    {collection.description}
                  </p>
                  <Badge className="font-medium-12" variant="default" size="sm">
                    {collection.count}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
