import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrowse = ({
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
    <path d="M89.792 512a448.192 448.192 0 0 0 845.056 0 448.192 448.192 0 0 0-845.056 0M4.16 499.008a533.568 533.568 0 0 1 1016.32 0l4.16 12.992-4.16 12.992a533.568 533.568 0 0 1-1016.32 0L0 512zM512.32 384a128 128 0 1 0 0 256 128 128 0 0 0 0-256M299.008 512a213.312 213.312 0 1 1 426.624 0 213.312 213.312 0 0 1-426.624 0" />
  </svg>
);
export default SvgBrowse;
