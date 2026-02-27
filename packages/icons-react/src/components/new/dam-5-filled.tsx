import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam5Filled = ({
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
    <path d="M85.312 85.312h853.312v85.376H896v682.624h42.624v85.376H85.312v-85.376H128V170.688H85.312zm128 85.376v682.624h85.312V170.688zm512 0v682.624h85.312V170.688zM640 853.312V640a128 128 0 1 0-256 0v213.312z" />
  </svg>
);
export default SvgDam5Filled;
