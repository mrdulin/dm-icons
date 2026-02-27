import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFork = ({
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
    <path d="M512 896a85.312 85.312 0 1 0 0-170.688A85.312 85.312 0 0 0 512 896m42.688-250.624a170.752 170.752 0 1 1-85.312 0v-90.688H298.688a128 128 0 0 1-128-128v-48a170.752 170.752 0 1 1 85.312 0v48c0 23.552 19.136 42.688 42.688 42.688h426.688A42.69 42.69 0 0 0 768 426.624v-48a170.752 170.752 0 1 1 85.376 0v48a128 128 0 0 1-128 128H554.688v90.688zm-341.44-346.688h.256a85.312 85.312 0 1 0-.256 0m597.44 0a85.312 85.312 0 1 0 0-170.688 85.312 85.312 0 0 0 0 170.688" />
  </svg>
);
export default SvgFork;
