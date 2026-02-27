import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrush = ({
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
    <path d="M508.608 1002.368 33.856 527.68l405.696-405.632L560.384 242.88l139.712-139.712 232.96 232.96-139.712 139.776L914.24 596.736zm131.2-251.84L285.632 396.544l-131.2 131.2 354.112 353.92 131.2-131.136zm-293.76-414.336 354.048 353.984 93.44-93.44-120.832-120.832 139.712-139.712-112.32-112.32L560.384 363.52 439.552 242.688l-93.44 93.44z" />
  </svg>
);
export default SvgBrush;
