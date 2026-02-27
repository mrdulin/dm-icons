import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlightTakeoff = ({
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
    <path d="M355.2 101.888 641.344 378.56l211.584-56.704a106.688 106.688 0 1 1 55.232 206.08L153.152 730.24 18.112 457.216 153.6 420.928l71.552 69.12 142.336-38.08L196.672 144.32l158.592-42.432zm-30.912 96.64L495.04 506.112 200.512 584.96l-45.952-44.416 44.032 89.088L886.08 445.44a21.312 21.312 0 1 0-11.072-41.216l-258.24 69.248L330.624 196.8l-6.336 1.664zM85.312 810.688h853.312V896H85.312z" />
  </svg>
);
export default SvgFlightTakeoff;
