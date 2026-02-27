import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightDownCircle = ({
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
    <path d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m469.376-384a469.312 469.312 0 1 1-938.688 0 469.312 469.312 0 0 1 938.688 0M605.12 544.768V363.712h85.376v326.72h-326.72V605.12h180.992L315.904 376.256l60.352-60.352z" />
  </svg>
);
export default SvgArrowRightDownCircle;
