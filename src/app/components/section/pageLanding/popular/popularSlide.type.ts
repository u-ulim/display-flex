export interface IPopularSlideProps {
  children: React.ReactNode;
  className?: string;
}

export interface IPopularSlide {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
