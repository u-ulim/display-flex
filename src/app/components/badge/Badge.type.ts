export interface IBadgeProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "default"
    | "cardRanking"
    | "cardRating"
    | "cardNew"
    | "cardGenre";
  size?: "default" | "sm" | "md" | "lg";
  disabled?: boolean;
}

export type hoverType = boolean;
