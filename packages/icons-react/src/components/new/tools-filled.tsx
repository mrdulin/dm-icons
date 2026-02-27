import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToolsFilled = ({
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
    <path d="m159.36 280.192-80.896-2.688-9.6 31.168a362.62 362.62 0 0 0 90.24 363.392 362.56 362.56 0 0 0 362.048 90.56l225.92 225.92 90.56-90.56-183.296-183.232 60.352-60.352 183.296 183.296 90.432-90.496-225.92-225.856a362.56 362.56 0 0 0-90.56-362.112 362.62 362.62 0 0 0-363.392-90.24l-31.232 9.6 2.752 80.96L430.592 310.08 309.888 430.72z" />
  </svg>
);
export default SvgToolsFilled;
