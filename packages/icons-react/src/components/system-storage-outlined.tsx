import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemStorageOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.666 2.667v2.417h1.667V2.667zm3 0v3.75H4.333v-3.75H2.666v10.667h10.667V6.027l-3.36-3.36zm1.86-1.333 4.14 4.14v9.193H1.333V1.334zm-5.86 8V8h6.667v1.334zm0 2V10h4v1.334z"
    />
  </svg>
);
export default SvgSystemStorageOutlined;
