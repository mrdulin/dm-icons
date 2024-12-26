import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPieChartFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.5 17.5"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m2.164 9.639 8.204 1.64V2.22a7.295 7.295 0 0 1-.912 14.531 7.294 7.294 0 0 1-7.292-7.111m-.859-1.996a7.295 7.295 0 0 1 7.24-6.393v7.841z" />
  </svg>
);
export default SvgPieChartFilled;
