import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrowseFilled = ({
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
    <path d="M384.32 512a128 128 0 1 1 256 0 128 128 0 0 1-256 0m128-384A533.57 533.57 0 0 0 4.16 499.008L0 512l4.16 12.992a533.568 533.568 0 0 0 1016.32 0l4.16-12.992-4.16-12.992A533.57 533.57 0 0 0 512.32 128m0 170.688a213.312 213.312 0 1 1 0 426.624 213.312 213.312 0 0 1 0-426.624" />
  </svg>
);
export default SvgBrowseFilled;
