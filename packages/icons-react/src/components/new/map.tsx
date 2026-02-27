import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMap = ({
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
    <path d="M384 78.592 643.2 229.76l295.424-123.072v664.448L640 945.408 380.8 794.176 85.312 917.312V252.8zm42.624 643.584 170.688 99.52V301.824l-170.688-99.52zM341.312 202.24l-170.688 99.584v487.488l170.688-71.04zm341.312 103.488v515.904l170.688-99.52V234.624l-170.688 71.168z" />
  </svg>
);
export default SvgMap;
