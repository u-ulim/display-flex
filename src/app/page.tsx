import { BannerSlide } from "./components/slide/banner";
import { PopularSlide } from "./components/slide/popular";
import { NewSlide } from "./components/slide/new";

export default function App() {
  return (
    <main>
      <BannerSlide />
      <PopularSlide />
      <NewSlide />
    </main>
  );
}
