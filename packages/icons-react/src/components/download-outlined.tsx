import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownloadOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
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
      d="M8.667 2v6.39L11 6.058l.943.943L8 10.943 4.057 7 5 6.057l2.333 2.334V2zM3 9.333v3.334h10V9.333h1.333V14H1.667V9.333z"
    />
  </svg>
);
export default SvgDownloadOutlined;
