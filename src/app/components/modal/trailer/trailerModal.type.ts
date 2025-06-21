export interface ITrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  movieTitle: string;
  trailerUrl?: string;
  trailerThumbnailUrl?: string;
  thumbnailUrl?: string;
}
