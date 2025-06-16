import React from "react";
import { Fast } from "../components/section/pageBrowse/fast";
import { Title } from "../components/section/pageBrowse/title";
import { Genre } from "../components/section/pageBrowse/genre";
import { Yearly } from "../components/section/pageBrowse/yearly";
import { Collection } from "../components/section/pageBrowse/collection";
import { Hot } from "../components/section/pageBrowse/hot";

export default function BrowsePage() {
  return (
    <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      <Title />
      <Fast />
      <Genre />
      <Yearly />
      <Collection />
      <Hot />
    </main>
  );
}
