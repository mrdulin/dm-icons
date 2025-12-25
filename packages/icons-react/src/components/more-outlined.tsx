import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoreOutlined = ({
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
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        d="M9.75 2.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 5.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 5.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
      />
    </g>
  </svg>
);
export default SvgMoreOutlined;
