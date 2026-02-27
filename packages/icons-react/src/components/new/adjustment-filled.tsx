import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdjustmentFilled = ({
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
    <path d="M220.608 170.688a128 128 0 0 1 241.408 0h476.608V256H462.08a128 128 0 0 1-241.408 0H85.312v-85.312zM561.92 469.312a128 128 0 0 1 241.472 0h135.232v85.376H803.328a128 128 0 0 1-241.408 0H85.312v-85.376zM220.608 768a128 128 0 0 1 241.408 0h476.608v85.312H462.08a128 128 0 0 1-241.408 0H85.312V768z" />
  </svg>
);
export default SvgAdjustmentFilled;
