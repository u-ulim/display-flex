import { IDetailActorProps } from "./detailActor.type";
import { detailActorVariants } from "./detailActorVariants";
import Image from "next/image";
import { Card } from "@/app/components/card";
import { CardContent } from "@/app/components/cardContent";

export const DetailActor = ({ cast }: IDetailActorProps) => {
  const { section } = detailActorVariants();

  return (
    <section className={section()}>
      <h3 className="font-bold-20 text-gray-900 dark:text-white mb-8">
        출연진
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
        {cast.map((actor) => (
          <Card key={actor.id} className="text-center cursor-default">
            <CardContent className="p-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                <Image
                  src={actor.image}
                  alt={actor.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-sb-14 text-gray-900 dark:text-white mb-1 line-clamp-1">
                {actor.name}
              </h4>
              <p className="font-medium-12 text-gray-500 dark:text-gray-500 line-clamp-1">
                {actor.character}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
