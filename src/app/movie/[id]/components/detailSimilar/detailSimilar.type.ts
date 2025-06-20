export interface IDetailSimilarProps {
  similarMovies: {
    id: number;
    title: string;
    image: string;
    rating: number;
    year: number;
  }[];
  className?: string;
}

export interface ISimilarMovie {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
}
