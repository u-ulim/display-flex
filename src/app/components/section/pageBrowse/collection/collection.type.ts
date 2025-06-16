export interface ICollectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface ICollection {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
