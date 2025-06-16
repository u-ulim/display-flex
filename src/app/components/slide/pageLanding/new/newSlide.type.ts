export interface INewsSlideProps {
  children: React.ReactNode;
  className?: string;
}

export interface INewsSlide {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
