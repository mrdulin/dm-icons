import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterFilled = ({
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
        d="M9.75 9.75h-3.5v4.379a.873.873 0 0 0 1.276.774l1.75-.897a.87.87 0 0 0 .474-.774zM14.125 1a.875.875 0 1 1 0 1.75h-.372L9.75 8h-3.5L2.338 2.75h-.463a.875.875 0 1 1 0-1.75z"
      />
    </g>
  </svg>
);
export default SvgFilterFilled;
