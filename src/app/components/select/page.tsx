"use client";
import { useState } from "react";
import { Select } from "./Select";

export default function SelectPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState<string>("");

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">
        Select 컴포넌트
      </h1>

      <div className="space-y-8">
        {/* Default Variant */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            Default Variant
          </h2>
          <div className="flex flex-wrap gap-4">
            <Select
              placeholder="장르 선택"
              options={[
                { value: "all", label: "전체" },
                { value: "action", label: "액션" },
                { value: "drama", label: "드라마" },
                { value: "comedy", label: "코미디" },
                { value: "thriller", label: "스릴러" },
                { value: "romance", label: "로맨스" },
                { value: "sf", label: "SF" },
              ]}
              value={selectedGenre}
              onValueChange={setSelectedGenre}
              variant="default"
              size="sm"
              className="w-40"
            />

            <Select
              placeholder="연도 선택"
              options={[
                { value: "all", label: "전체" },
                { value: "2024", label: "2024" },
                { value: "2023", label: "2023" },
                { value: "2022", label: "2022" },
                { value: "2021", label: "2021" },
                { value: "2020", label: "2020" },
              ]}
              value={selectedYear}
              onValueChange={setSelectedYear}
              variant="default"
              size="default"
              className="w-40"
            />
          </div>
        </section>

        {/* Filter Variant */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            Filter Variant
          </h2>
          <div className="flex flex-wrap gap-4">
            <Select
              placeholder="장르"
              options={[
                { value: "all", label: "전체" },
                { value: "action", label: "액션" },
                { value: "drama", label: "드라마" },
                { value: "comedy", label: "코미디" },
                { value: "thriller", label: "스릴러" },
                { value: "romance", label: "로맨스" },
                { value: "sf", label: "SF" },
              ]}
              variant="filter"
              size="sm"
              className="w-32"
            />

            <Select
              placeholder="평점"
              options={[
                { value: "all", label: "전체" },
                { value: "9+", label: "9.0 이상" },
                { value: "8+", label: "8.0 이상" },
                { value: "7+", label: "7.0 이상" },
                { value: "6+", label: "6.0 이상" },
              ]}
              value={selectedRating}
              onValueChange={setSelectedRating}
              variant="filter"
              size="sm"
              className="w-32"
            />
          </div>
        </section>

        {/* Sort Variant */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            Sort Variant
          </h2>
          <div className="flex flex-wrap gap-4">
            <Select
              placeholder="정렬 방식"
              options={[
                { value: "latest", label: "최신순" },
                { value: "oldest", label: "오래된 순" },
                { value: "rating", label: "평점순" },
                { value: "popular", label: "인기순" },
                { value: "alphabetical", label: "가나다순" },
              ]}
              variant="sort"
              size="default"
              className="w-40"
            />
          </div>
        </section>

        {/* Size Variants */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            Size Variants
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Select
              placeholder="Small"
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              variant="default"
              size="sm"
              className="w-32"
            />

            <Select
              placeholder="Default"
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              variant="default"
              size="default"
              className="w-40"
            />

            <Select
              placeholder="Large"
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              variant="default"
              size="lg"
              className="w-48"
            />
          </div>
        </section>

        {/* Disabled State */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            Disabled State
          </h2>
          <div className="flex flex-wrap gap-4">
            <Select
              placeholder="비활성화된 Select"
              options={[
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
              ]}
              variant="default"
              size="default"
              disabled={true}
              className="w-40"
            />
          </div>
        </section>

        {/* Selected Values Display */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            Selected Values
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              선택된 장르: {selectedGenre || "없음"}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              선택된 연도: {selectedYear || "없음"}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              선택된 평점: {selectedRating || "없음"}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
