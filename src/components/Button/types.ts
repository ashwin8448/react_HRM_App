import { ReactNode } from "react";

export interface IButtonAttributes {
  className?: string;
  description?: string;
  src?: string;
  alt?: string;
  action?: string;
  onClick?: () => void;
  children?: ReactNode;
}
