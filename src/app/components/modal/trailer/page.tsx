"use client";

import { TrailerModal } from "./TrailerModal";

export default function TrailerModalPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 max-w-[1080px] mx-auto relative">
      <TrailerModal
        isOpen={true}
        onClose={() => {}}
        movieTitle="오펜하이머"
        trailerUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </div>
  );
}
