import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUploadOutlined = ({
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
    <path d="m8 1.724 3.943 3.943-.943.942-2.333-2.333v6.39H7.333v-6.39L5 6.61l-.943-.942zm-5 7.61v3.333h10V9.333h1.333V14H1.667V9.333z" />
  </svg>
);
export default SvgUploadOutlined;
