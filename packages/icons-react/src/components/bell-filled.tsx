import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBellFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10 14c0 1.1-.9 2-2 2s-2-.9-2-2zm5-3c.6 0 1 .4 1 1s-.4 1-1 1H1c-.6 0-1-.4-1-1s.4-1 1-1h.5C2.2 10.3 3 9.3 3 8V5c0-2.8 2.2-5 5-5s5 2.2 5 5v3c0 1.3.8 2.3 1.5 3z" />
  </svg>
);
export default SvgBellFilled;
