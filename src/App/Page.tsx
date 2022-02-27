export interface Page {
  name: string;
  icon?: string;
  jsx?: () => JSX.Element;
  link?: string;
  route?: string;
}
