export interface IGenreProps {
  children: React.ReactNode;
  className?: string;
}

export interface IGenre {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
