import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTagOutlined = ({
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
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M7.582 1c.145 0 .284.058.386.16l6.493 6.493a1.84 1.84 0 0 1 0 2.602l-4.206 4.206a1.84 1.84 0 0 1-2.602 0L1.16 7.968A.55.55 0 0 1 1 7.582V1.546C1 1.244 1.244 1 1.546 1zm-.225 1.092H2.092v5.265l6.333 6.332a.75.75 0 0 0 .411.21l.118.009a.75.75 0 0 0 .529-.22l4.206-4.206a.747.747 0 0 0 0-1.057zm-1.93 1.495a1.84 1.84 0 1 1 0 3.679 1.84 1.84 0 0 1 0-3.68m0 1.092a.747.747 0 1 0 0 1.495.747.747 0 0 0 0-1.495"
      />
    </g>
  </svg>
);
export default SvgTagOutlined;
