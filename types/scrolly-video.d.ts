declare module "scrolly-video/dist/ScrollyVideo.esm.jsx" {
  import { Component } from "react";

  export interface ScrollyVideoProps {
    src: string;
    scrollDistance?: number;
    startOffset?: number;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export default class ScrollyVideo extends Component<ScrollyVideoProps> {}
}

