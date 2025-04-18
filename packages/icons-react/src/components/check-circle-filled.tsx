import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckCircleFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.984 2.69 7.735 8.867 5.198 6.393a1 1 0 0 0-1.396 1.432l3.24 3.16a1 1 0 0 0 1.4-.006l6.688-6.61a8 8 0 1 1-1.147-1.679" />
  </svg>
);
export default SvgCheckCircleFilled;
