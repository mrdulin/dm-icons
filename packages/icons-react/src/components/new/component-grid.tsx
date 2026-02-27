import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentGrid = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312V85.376zm85.312 85.376v170.688h170.688V170.688zm256 0v170.688h170.688V170.688zm256 0v170.688h170.688V170.688zm170.688 256H682.624v170.688h170.688zm0 256H682.624v170.688h170.688zm-256 170.688V682.688H426.624v170.688zm-256 0V682.688H170.624v170.688zm-170.688-256h170.688V426.688H170.624zm256-170.688v170.688h170.688V426.688z" />
  </svg>
);
export default SvgComponentGrid;
