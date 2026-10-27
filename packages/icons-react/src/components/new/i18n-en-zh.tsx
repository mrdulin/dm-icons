import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgI18NEnZh = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillOpacity={0.65}
      d="M10.32 14.85v6q0 .324.228.552a.75.75 0 0 0 .552.228h9.75q.324 0 .552-.228a.75.75 0 0 0 .228-.552V11.1q0-.324-.228-.552a.75.75 0 0 0-.552-.228h-6V8.88h6a2.14 2.14 0 0 1 1.57.648q.65.65.65 1.572v9.75a2.14 2.14 0 0 1-.648 1.57 2.14 2.14 0 0 1-1.572.65H11.1a2.14 2.14 0 0 1-1.57-.648 2.14 2.14 0 0 1-.65-1.572v-6z"
    />
    <path
      fillOpacity={0.65}
      d="M3.6 1.2H12q2.4 0 2.4 2.4V12q0 2.4-2.4 2.4H3.6q-2.4 0-2.4-2.4V3.6q0-2.4 2.4-2.4"
    />
    <path
      fillOpacity={0.65}
      d="M13.2 17.707h.99v-.553h1.428V19.8h1.048v-2.646h1.457v.46H19.2v-3.507h-2.534v-.768q0-.338.087-.585a.3.3 0 0 0 .03-.093q0-.03-.205-.06h-.991v1.506H13.2zm.99-2.737h1.428v1.353H14.19zm3.933 1.353h-1.457V14.97h1.457z"
    />
    <path
      fill="#fff"
      d="m5.728 10.8.564-1.52h2.936l.564 1.52H11.4L8.785 3.6h-1.89L4.2 10.8H5.73zm.966-2.724L7.78 5.002h.04l1.006 3.073H6.694z"
    />
    <path
      fillOpacity={0.65}
      d="M21 6.9h-1.5a3 3 0 0 0-3-3V2.4A4.5 4.5 0 0 1 21 6.9m-18 9h1.5a3 3 0 0 0 3 3v1.5A4.5 4.5 0 0 1 3 15.9"
    />
  </svg>
);
export default SvgI18NEnZh;
