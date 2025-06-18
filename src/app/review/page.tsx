import React from "react";
import { Title } from "../components/section/pageReview/title";
import { Review } from "../components/card/review/Review";

export default function ReviewPage() {
  return (
    <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      <Title />
      <Review />
    </main>
  );
}
