import React from "react";
import { FilterList } from "../components/section/pageSearch/filter/FilterList";

export default function SearchPage() {
  return (
    <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      <FilterList />
    </main>
  );
}
