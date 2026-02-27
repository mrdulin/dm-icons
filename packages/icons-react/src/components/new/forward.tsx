import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgForward = ({
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
    <path d="M544 184.96v298.688L245.312 185.024V839.04L544 540.352V839.04L871.04 512zM750.272 512l-120.96 120.96V391.04zm-298.624 0-120.96 120.96V391.04L451.584 512z" />
  </svg>
);
export default SvgForward;
