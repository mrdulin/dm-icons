import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartBellOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2 1a1 1 0 0 1 1 1v19h8.026q-.024.12-.026.25c0 1 .75 1.75 2 1.75H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1M19 21a2 2 0 1 1-4 0z"
    />
    <path
      fill="currentColor"
      d="M17 11a4 4 0 0 1 4 4v2.5a1.65 1.65 0 0 0 1.5 1.5.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1 1.65 1.65 0 0 0 1.5-1.5V15a4 4 0 0 1 4-4"
    />
    <path
      fill="currentColor"
      d="M22.566 3.88 18.9 9.894l-3.08-3.227-2.346 1.76L10.1 15.76l-3.227-5.28-2.053 2.2-1.32-1.467L7.02 7.4l2.933 4.107 1.76-4.107 4.254-3.227 2.64 2.787L20.952 3z"
    />
  </svg>
);
export default SvgChartBellOutlined;
