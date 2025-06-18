import React from "react";
import { CardContent } from ".";
import Image from "next/image";

export default function CardContentpage() {
  const movie = {
    id: 1,
    title: "Movie Title",
    year: "2024",
    rating: 8.5,
    image: "/placeholder.svg",
  };

  return (
    <CardContent variant="default">
      <div className="aspect-[3/4] bg-gray-200 rounded-t-lg relative overflow-hidden">
        <Image
          src={movie.image || "/placeholder.svg"}
          alt={movie.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {movie.rating}
        </div>
      </div>
      <div className="p-3 flex-grow">
        <h4 className="font-semibold text-sm mb-1 truncate">{movie.title}</h4>
        <p className="text-xs text-gray-500">{movie.year}</p>
      </div>
    </CardContent>
  );
}
