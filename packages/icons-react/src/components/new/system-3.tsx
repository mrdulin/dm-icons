import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystem3 = ({
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
    <path d="M85.312 85.312h216.64a167.49 167.49 0 0 1 167.36 167.36v216.64h-216.64a167.55 167.55 0 0 1-167.36-167.36zm85.312 85.376v131.264c0 45.184 36.864 82.048 82.048 82.048H384V252.672c0-45.184-36.864-81.984-82.048-81.984zm551.424 0c-45.248 0-82.048 36.8-82.048 81.984V384h131.264c45.184 0 82.048-36.864 82.048-82.048V170.688zm-167.424 81.984a167.49 167.49 0 0 1 167.424-167.36h216.576v216.64a167.49 167.49 0 0 1-167.36 167.36h-216.64zM252.672 640c-45.184 0-82.048 36.864-82.048 82.048v131.264h131.328c45.184 0 82.048-36.8 82.048-82.048V640zm-167.36 82.048a167.55 167.55 0 0 1 167.36-167.36h216.64v216.576a167.55 167.55 0 0 1-167.36 167.424H85.312zm469.312-167.36h216.64a167.55 167.55 0 0 1 167.36 167.36v216.64H722.048a167.55 167.55 0 0 1-167.424-167.424zM640 640v131.264c0 45.248 36.8 82.048 82.048 82.048h131.264V722.048c0-45.184-36.864-82.048-82.048-82.048z" />
  </svg>
);
export default SvgSystem3;
