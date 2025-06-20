import { ReactNode } from "react";

export interface IModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}
