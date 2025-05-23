import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeadPhoneOutlined = ({
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
    <path d="M13.5 10V8a5.5 5.5 0 0 0-11 0v2h2A1.5 1.5 0 0 1 6 11.5v2A1.5 1.5 0 0 1 4.5 15h-2A1.5 1.5 0 0 1 1 13.5V8a7 7 0 1 1 14 0v4.274h-.001L15 13.498a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5z" />
  </svg>
);
export default SvgHeadPhoneOutlined;
