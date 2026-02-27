import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFingerprint1 = ({
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
    <path d="M85.312 512a426.688 426.688 0 1 1 853.312 0v384h-85.312V512a341.312 341.312 0 1 0-682.688 0v384H85.312zm192 0a234.688 234.688 0 1 1 469.312 0v384h-85.312V512a149.312 149.312 0 1 0-298.688 0v384h-85.312zm277.312-42.688V896h-85.312V469.312z" />
  </svg>
);
export default SvgFingerprint1;
