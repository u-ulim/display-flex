export interface IBannerSlideProps {
  children: React.ReactNode;
  className?: string;
}

export interface IHeroBanner {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
