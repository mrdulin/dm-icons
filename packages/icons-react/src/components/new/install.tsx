import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstall = ({
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
    <path d="M554.624 85.312v303.36L661.632 282.88l60.032 60.672L512 550.848l-209.664-207.36 59.968-60.608 107.008 105.792V85.312zm-469.312 0H384v85.376H170.624v426.624h682.688V170.688H640V85.312h298.624v853.376H85.312zm768 597.376H170.624v170.624h682.688zm-597.44 42.56h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgInstall;
