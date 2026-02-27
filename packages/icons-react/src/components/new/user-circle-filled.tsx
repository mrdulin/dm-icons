import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserCircleFilled = ({
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
    <path d="M981.376 512c0 142.72-63.744 270.592-164.288 356.672A467.46 467.46 0 0 1 512 981.312a467.46 467.46 0 0 1-305.024-112.64A469.312 469.312 0 1 1 981.376 512M682.688 362.688a170.688 170.688 0 1 0-341.312 0 170.688 170.688 0 0 0 341.312 0M789.376 777.6V768a170.69 170.69 0 0 0-170.688-170.688H405.376A170.69 170.69 0 0 0 234.688 768v9.6A382.34 382.34 0 0 0 512 896a382.34 382.34 0 0 0 277.376-118.4" />
  </svg>
);
export default SvgUserCircleFilled;
