"use client";
import Image from "next/image";
import { Badge } from "@/app/components/badge";
import { Button } from "@/app/components/button";
import { Star, Calendar, Clock, Heart, Share2, Play } from "lucide-react";
import { useState } from "react";
import { DetailHeader } from "./components/detailHeader";
import { DetailActor } from "./components/detailActor";
import { DetailReview } from "./components/detailReview";
import { DetailSimilar } from "./components/detailSimilar";

export default function DetailPage() {
  const [watchlistModalOpen, setWatchlistModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  return (
    <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      <DetailHeader />
      <DetailActor />
      <DetailReview />
      <DetailSimilar />
    </main>
  );
}
