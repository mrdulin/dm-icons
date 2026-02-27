import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTimeFilled = ({
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
    <path d="M512 981.312a469.312 469.312 0 1 1 0-938.624 469.312 469.312 0 0 1 0 938.624m42.688-746.624h-85.312v295.04L640 700.288l60.352-60.352-145.664-145.664z" />
  </svg>
);
export default SvgTimeFilled;
