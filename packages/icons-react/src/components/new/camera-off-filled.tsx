import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCameraOffFilled = ({
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
    <path d="m85.504 25.152-.192-.128-60.288 60.288 128 128H42.688V896h792.96l103.04 103.04 60.16-60.16L85.312 25.344zM288 544c0-54.656 19.584-104.704 52.096-143.616l60.736 60.8A138.688 138.688 0 0 0 594.88 655.232l60.736 60.672A224 224 0 0 1 288 544m693.312 256.64V213.376H751.68l-64-128H336.32l-23.488 46.912L500.928 320.32a224 224 0 0 1 234.816 234.816l245.568 245.632z" />
  </svg>
);
export default SvgCameraOffFilled;
