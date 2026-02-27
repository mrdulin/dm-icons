import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystem3Filled = ({
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
    <path d="M85.312 85.312h216.64a167.49 167.49 0 0 1 167.36 167.36v216.64h-216.64a167.55 167.55 0 0 1-167.36-167.36zm469.312 167.36a167.49 167.49 0 0 1 167.424-167.36h216.576v216.64a167.49 167.49 0 0 1-167.36 167.36h-216.64zM85.312 722.048a167.55 167.55 0 0 1 167.36-167.36h216.64v216.576a167.55 167.55 0 0 1-167.36 167.424H85.312zm469.312-167.36h216.64a167.55 167.55 0 0 1 167.36 167.36v216.64H722.048a167.55 167.55 0 0 1-167.424-167.424z" />
  </svg>
);
export default SvgSystem3Filled;
