export interface IEventProps {
  children: React.ReactNode;
  className?: string;
}

export interface IEvent {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
