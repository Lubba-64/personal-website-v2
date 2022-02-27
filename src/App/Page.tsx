export interface HeaderContent {
  name: string;
  icon?: string;
  jsx?: () => JSX.Element;
  link?: string;
}
