export interface IDetailActorProps {
  cast: {
    id: number;
    name: string;
    character: string;
    image: string;
  }[];
  className?: string;
}
