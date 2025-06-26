export interface IFilterProps {
  children: React.ReactNode;
  className?: string;
}

export interface IFilter {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
