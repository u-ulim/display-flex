import { cn } from "tailwind-variants";
import { IDetailHeaderProps } from "./detailActor.type";
import { detailActorVariants } from "./detailActorVariants";
import Image from "next/image";
import { Badge } from "@/app/components/badge";
import { Button } from "@/app/components/button";
import { Star, Calendar, Clock, Heart, Share2, Play } from "lucide-react";
import { useState } from "react";
import { Card } from "@/app/components/card";
import { CardContent } from "@/app/components/cardContent";

export const DetailActor = () => {
  const { section } = detailActorVariants();

  return (
    <section className={section()}>
      <h3 className="text-2xl font-bold text-gray-900 mb-8">출연진</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
        {[
          { name: "킬리언 머피", role: "로버트 오펜하이머" },
          { name: "에밀리 블런트", role: "키티 오펜하이머" },
          { name: "맷 데이먼", role: "레슬리 그로브스" },
          { name: "로버트 다우니 주니어", role: "루이스 스트라우스" },
          { name: "플로렌스 퓨", role: "진 태틀록" },
          { name: "라미 말렉", role: "데이비드 힐" },
        ].map((actor, i) => (
          <Card key={i} className="text-center">
            <CardContent className="p-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt={actor.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold text-sm mb-1 line-clamp-1">
                {actor.name}
              </h4>
              <p className="text-xs text-gray-500 line-clamp-1">{actor.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
