import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseRectangle = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312zm85.312 85.376v682.624h682.688V170.688zm220.672 160.32L512 451.648l120.64-120.64 60.352 60.288L572.288 512l120.704 120.704-60.352 60.288L512 572.352l-120.704 120.64-60.352-60.288L451.648 512 330.88 391.296l60.352-60.288z" />
  </svg>
);
export default SvgCloseRectangle;
