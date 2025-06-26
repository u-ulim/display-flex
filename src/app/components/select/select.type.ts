export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps {
  placeholder?: string;
  options: ISelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  variant?: "default" | "filter" | "sort";
  size?: "default" | "sm" | "lg";
  disabled?: boolean;
}
