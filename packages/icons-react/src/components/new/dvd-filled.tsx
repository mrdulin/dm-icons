import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDvdFilled = ({
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
    <path d="M341.312 512a170.688 170.688 0 1 1 341.312 0 170.688 170.688 0 0 1-341.312 0M512 426.688a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624M938.624 85.312v853.376H85.312V85.312zM512 256a256 256 0 1 0 0 512 256 256 0 0 0 0-512" />
  </svg>
);
export default SvgDvdFilled;
