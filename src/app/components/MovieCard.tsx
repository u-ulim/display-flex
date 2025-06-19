import Link from "next/link";
import Image from "next/image";
import { Card } from "./card";
import { CardContent } from "./cardContent";
import { Badge } from "./badge";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    image: string;
    rating: number | string;
    year: number | string;
  };
  showRating?: boolean;
  showGenreBadge?: boolean;
  className?: string;
}

export function MovieCard({
  movie,
  showRating = true,
  showGenreBadge = false,
  className = "",
}: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className={className}>
      <Card>
        <CardContent variant="default">
          <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-t-lg relative overflow-hidden">
            <Image
              src={movie.image || "/placeholder.svg"}
              alt={movie.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />

            {showRating && (
              <Badge
                className="font-bold-14 absolute top-2 right-2 z-20"
                variant="cardRating"
                size="md"
              >
                <Star className="w-3 h-3 mr-1 text-yellow-300 fill-yellow-300" />
                {movie.rating}
              </Badge>
            )}
          </div>

          <div className="p-3 flex-grow">
            <h4 className="font-semibold text-sm mb-1 text-black dark:text-white truncate">
              {movie.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {movie.year}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
