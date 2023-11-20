import { ReactNode } from "react";

export default interface ISearchBarProps {
  placeholder?: string;
  children?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
