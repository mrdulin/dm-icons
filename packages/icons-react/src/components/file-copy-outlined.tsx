import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileCopyOutlined = ({
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
    <path d="M4 .667h6.276L14 4.39v8.276H4zM5.333 2v9.333h7.334V6h-4V2zM10 2.276v2.39h2.39zM2.667 3.333V14H10v1.333H1.333v-12z" />
  </svg>
);
export default SvgFileCopyOutlined;
