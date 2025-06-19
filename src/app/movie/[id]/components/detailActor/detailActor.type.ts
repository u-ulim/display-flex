export interface IDetailHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface IDetailHeader {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
