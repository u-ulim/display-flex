"use client";

import { Award, Calendar, Globe, TrendingUp } from "lucide-react";
import { yearlyVariants } from "./yearlyVariants";
import { Card } from "@/app/components/card/Card";
import { CardContent } from "@/app/components/cardContent/CardContent";
import { Button } from "@/app/components/button/Button";

const { section } = yearlyVariants();

const years = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2010년대",
  "2000년대",
  "90년대",
  "클래식",
];

export const Yearly = () => {
  return (
    <section className={section()}>
      <h3 className="font-bold-20 mb-4 dark:text-white">연도별 탐색</h3>
      <div className="flex flex-wrap gap-3">
        {years.map((year) => (
          <Button
            type="button"
            key={year}
            variant="select"
            size="sm"
            className="font-regular-14"
            onClick={() => {}}
          >
            {year}
          </Button>
        ))}
      </div>
    </section>
  );
};
