import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapSearch = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M384 78.592 643.2 229.76l295.424-123.072V448h-85.312V234.688l-170.688 71.04V448h-85.312V301.824l-170.688-99.52v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.312V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zM736 576a117.312 117.312 0 0 1 83.008 200.256l-.32.32A117.312 117.312 0 1 1 736 576m170.304 227.2a202.688 202.688 0 1 0-60.288 60.352l71.232 71.424 60.416-60.224z" />
  </svg>
);
export default SvgMapSearch;
