export interface Page {
  pageName: string;
  icon?: string;
  jsx?: () => JSX.Element;
  link?: string;
}
