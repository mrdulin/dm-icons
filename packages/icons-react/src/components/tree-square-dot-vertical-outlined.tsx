import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeSquareDotVerticalOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.917 2.333h1.75v1.75h-1.75zM8.75 3.792V5.25h4.083V1.167H8.75v1.458H6.611v3.792H5.25V4.958H1.167v4.084H5.25V7.583h1.361v3.792H8.75v1.458h4.083V8.75H8.75v1.458h-.972V3.792zm1.167 7.875v-1.75h1.75v1.75zM4.083 6.125v1.75h-1.75v-1.75z" />
  </svg>
);
export default SvgTreeSquareDotVerticalOutlined;
