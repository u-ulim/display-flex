export interface IGenreSlideProps {
  children: React.ReactNode;
  className?: string;
}

export interface IGenreSlide {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
