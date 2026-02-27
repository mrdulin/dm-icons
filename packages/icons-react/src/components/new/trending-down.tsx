import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrendingDown = ({
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
    <path d="m88.96 320 273.728 273.664L533.312 423.04 750.336 640H576v85.312h320v-320h-85.312v174.336L533.312 302.336 362.688 472.96 149.312 259.648 89.024 320z" />
  </svg>
);
export default SvgTrendingDown;
