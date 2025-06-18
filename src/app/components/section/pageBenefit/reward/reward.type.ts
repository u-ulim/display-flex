export interface IRewardProps {
  children: React.ReactNode;
  className?: string;
}

export interface IReward {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
