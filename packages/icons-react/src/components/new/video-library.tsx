import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoLibrary = ({
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
    <path d="M256 85.312h512v85.376H256zm-85.376 128h682.688v85.376H170.624zm-92.16 128h867.072l-89.6 597.376H168.064zm99.072 85.376 64 426.624h540.928l64-426.624zm270.464 64L647.04 640 448 789.312z" />
  </svg>
);
export default SvgVideoLibrary;
