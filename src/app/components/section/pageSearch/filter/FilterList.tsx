import { filterVariants } from "./filterVariants";
import { Filter, Grid, List } from "lucide-react";
import { Button } from "../../../button/Button";
import { Select } from "../../../select/Select";

const { section } = filterVariants();

export const FilterList = () => {
  return (
    <section className={section()}>
      <div className="pt-10 mb-4">
        <h2 className="font-bold-32 mb-2 dark:text-white">검색</h2>
        <p className="text-gray-600 dark:text-gray-300">
          원하는 키워드를 검색해보세요!
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm  dark:border-gray-700 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                필터:
              </span>
            </div>

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
              placeholder="연도"
              options={[
                { value: "all", label: "전체" },
                { value: "2024", label: "2024" },
                { value: "2023", label: "2023" },
                { value: "2022", label: "2022" },
                { value: "2021", label: "2021" },
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
              ]}
              variant="filter"
              size="sm"
              className="w-32"
            />
          </div>

          {/* Sort and View Options */}
          <div className="flex items-center space-x-4">
            <Select
              placeholder="정렬"
              options={[
                { value: "latest", label: "최신순" },
                { value: "oldest", label: "오래된 순" },
                { value: "rating", label: "평점순" },
                { value: "popular", label: "인기순" },
              ]}
              variant="sort"
              size="sm"
              className="w-36"
            />

            <div className="flex  dark:border-gray-600 sm:gap-2 rounded-lg">
              <Button
                type="button"
                variant="allView"
                size="sm"
                className="text-orange-600"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="allView"
                size="sm"
                className="dark:text-gray-300"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
