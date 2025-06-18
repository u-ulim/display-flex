import React from "react";
import { Profile } from "../components/section/pageMy/profile/Profile";
import { Quik } from "../components/section/pageMy/quik";
import { Recent } from "../components/section/pageMy/recent";
import { Setting } from "../components/section/pageMy/setting";
import { Membership } from "../components/section/pageMy/membership";

export default function MyPage() {
  return (
    <main className="max-w-[1080px] min-h-screen mx-auto bg-gray-50 dark:bg-gray-900">
      <Profile />
      <Quik />
      <Recent />
      <Setting />
      <Membership />
    </main>
  );
}
