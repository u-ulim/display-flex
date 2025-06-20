export interface IDetailReviewProps {
  reviews: {
    id: number;
    user: string;
    rating: number;
    date: string;
    content: string;
    helpfulCount: number;
    image?: string;
  }[];
  className?: string;
}
