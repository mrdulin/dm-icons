import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMergeCells = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312zm85.312 85.376v682.624h298.688V682.688h85.312v170.624h298.688V170.688H554.624v170.624h-85.312V170.688zm562.432 265.856L657.664 512l75.392 75.392-60.352 60.352L537.088 512l135.68-135.744 60.352 60.288zM355.392 376.32 491.136 512 355.392 647.744l-60.352-60.288L370.56 512l-75.52-75.392 60.352-60.352z" />
  </svg>
);
export default SvgMergeCells;
