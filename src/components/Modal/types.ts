import { ReactNode } from "react";

export default interface IModal {
  children: ReactNode;
  updateIdToDelete: (id: number) => void;
}
