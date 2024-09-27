export interface IPage {
  name: string;
  path: string;
  element: () => JSX.Element;
}