export interface IPointProps {
  children: React.ReactNode;
  className?: string;
}

export interface IPoint {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
