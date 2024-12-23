import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlag = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path fill="#B8CAE6" d="M2.333 2h1v11a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1" />
      <path
        fill="#B8CAE6"
        d="M4.667 2h8.503a.667.667 0 0 1 .495 1.113l-1.998 2.22 1.998 2.221a.667.667 0 0 1-.495 1.113H4.667z"
        opacity={0.3}
      />
    </g>
  </svg>
);
export default SvgFlag;
