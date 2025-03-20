import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBondOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.688 4.37h14.625c.931 0 1.687.756 1.687 1.687v7.875c0 .932-.756 1.688-1.687 1.688H2.688A1.69 1.69 0 0 1 1 13.933V6.056c0-.931.756-1.687 1.688-1.687M10 12.808a2.812 2.812 0 1 0 0-5.625 2.812 2.812 0 0 0 0 5.624M4.375 11.12a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m11.25 0a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25" />
  </svg>
);
export default SvgBondOutlined;
