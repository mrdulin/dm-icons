import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDragHandleOutlined = ({
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
    <g fill="currentColor">
      <rect />
      <path d="M7 2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M7 6.1a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M7 9.95a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M7 13.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
    </g>
  </svg>
);
export default SvgDragHandleOutlined;
