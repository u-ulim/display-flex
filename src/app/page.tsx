import { BannerSlide } from "./components/section/pageLanding/banner";
import { PopularSlide } from "./components/section/pageLanding/popular";
import { NewSlide } from "./components/section/pageLanding/new";
import { GenreSlide } from "./components/section/pageLanding/genre";
import { Review } from "./components/card/review/Review";

export default function App() {
  return (
    <main>
      <BannerSlide />
      <PopularSlide />
      <NewSlide />
      <GenreSlide />
      <Review />
    </main>
  );
}
