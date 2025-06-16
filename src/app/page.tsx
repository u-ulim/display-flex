import { BannerSlide } from "./components/slide/pageLanding/banner";
import { PopularSlide } from "./components/slide/pageLanding/popular";
import { NewSlide } from "./components/slide/pageLanding/new";
import { GenreSlide } from "./components/slide/pageLanding/genre";
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
