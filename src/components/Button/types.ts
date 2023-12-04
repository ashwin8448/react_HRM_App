import { ReactNode } from "react";

export interface IButtonAttributes {
  buttonType?: string;
  onClick?: () => void;
  children: ReactNode;
  isNegative?: boolean;
  title:string
  styleClass?: string;
}

export interface IButtonStyleProps {
  $buttonType?: string;
  $isNegative?: boolean;
}
