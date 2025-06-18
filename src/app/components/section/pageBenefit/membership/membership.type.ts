export interface IMembershipProps {
  children: React.ReactNode;
  className?: string;
}

export interface IMembership {
  id: number;
  title: string;
  description: string;
  badge: string;
  rating: string;
  year: string;
  genre: string;
  image: string;
}
