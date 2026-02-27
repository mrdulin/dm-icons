import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapBlocked = ({
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
    <path d="M384 78.592 643.2 229.76l295.424-123.072V448h-85.312V234.688l-170.688 71.04V448h-85.312V301.824l-170.688-99.52v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.312V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zM768 576a149.312 149.312 0 0 0-131.392 220.352L839.04 593.92A148.54 148.54 0 0 0 768 576m131.392 78.272L696.896 856.704a149.312 149.312 0 0 0 202.432-202.432zm-366.08 71.04a234.688 234.688 0 1 1 469.312 0 234.688 234.688 0 0 1-469.312 0" />
  </svg>
);
export default SvgMapBlocked;
