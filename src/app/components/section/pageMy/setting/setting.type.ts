export interface ISettingProps {
  children: React.ReactNode;
  className?: string;
}

export interface ISetting {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
