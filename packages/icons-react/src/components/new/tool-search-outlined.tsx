import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToolSearchOutlined = ({
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
      d="M11.167 8a3.167 3.167 0 0 1 2.66 4.885l1.115 1.114-.941.943-1.117-1.114A3.167 3.167 0 1 1 11.167 8m-.166-3.666h3.666v3h-1.333V5.667H2.667V13h4.667v1.334h-6v-10h3.667V1.667h6zm.166 4.999a1.834 1.834 0 1 0 .001 3.669 1.834 1.834 0 0 0-.001-3.669M6.334 4.334h3.333V3H6.334z"
    />
  </svg>
);
export default SvgToolSearchOutlined;
