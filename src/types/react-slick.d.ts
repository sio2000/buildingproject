declare module 'react-slick' {
  import { ReactNode } from 'react';
  
  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    nextArrow?: ReactNode;
    prevArrow?: ReactNode;
    customPaging?: (i: number) => ReactNode;
    className?: string;
    'aria-label'?: string;
    children?: ReactNode;
  }

  export default class Slider extends React.Component<Settings> {}
} 