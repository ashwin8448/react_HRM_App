export interface IButtonAttributes {
  buttonType?: string;
  description?: string;
  src?: string;
  alt?: string;
  action?: string;
  onClick?: () => void;
}

export interface IButtonStyleProps {
  $buttonType?: string;
}
