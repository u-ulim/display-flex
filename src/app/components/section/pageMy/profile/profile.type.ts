export interface IProfileProps {
  children: React.ReactNode;
  className?: string;
}

export interface IProfile {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
