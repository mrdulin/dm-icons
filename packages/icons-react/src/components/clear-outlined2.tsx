import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClearOutlined2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 14 14"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.25.583h3.5v4.959h3.5v7.875H1.75V5.542h3.5zM6.417 1.75v4.958h-3.5v1.459h8.166V6.708h-3.5V1.75zm4.666 7.583H2.917v2.917h5.25V10.5h1.166v1.75h1.75z"
    />
  </svg>
);
export default SvgClearOutlined2;
