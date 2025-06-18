import React from "react";
import { Title } from "../components/section/pageBenefit/title";

import { Event } from "../components/section/pageBenefit/event/Event";
import Membership from "../components/section/pageBenefit/membership/Membership";
import Reward from "../components/section/pageBenefit/reward/Reward";
import Point from "../components/section/pageBenefit/point/Point";

export default function BenefitPage() {
  return (
    <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      <Title />
      <Membership />
      <Event />
      <Reward />
      <Point />
    </main>
  );
}
