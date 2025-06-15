export interface IButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?:
    | "play"
    | "arrow"
    | "outline"
    | "footer"
    | "default"
    | "upgrade"
    | "nonOutline"
    | "select";
  size?: "default" | "sm" | "md" | "lg" | "footer" | "pagination";
  disabled?: boolean;
}

export type hoverType = boolean;
