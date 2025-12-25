import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSaveOutlined = ({
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
    <path d="M1.333 1.333h9.61l3.724 3.724v9.61H1.333zm1.334 1.334v10.666H4v-4h8v4h1.333V5.61L10.39 2.667H8.667v2.666H4V2.667zm2.666 0V4h2V2.667zm5.334 10.666v-2.666H5.333v2.666z" />
  </svg>
);
export default SvgSaveOutlined;
