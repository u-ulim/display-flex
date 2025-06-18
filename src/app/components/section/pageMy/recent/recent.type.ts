export interface IRecentProps {
  children: React.ReactNode;
  className?: string;
}

export interface IRecent {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
