import type React from "react";

export interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  icon: React.ReactNode;
  color: string;
  type: "basic" | "premium" | "vip";
}

export interface IPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  planType?: string;
  planPrice?: number;
  planOriginalPrice?: number;
  planFeatures?: string[];
  planIcon?: React.ReactNode;
  planColor?: string;
  planName?: string;
}
