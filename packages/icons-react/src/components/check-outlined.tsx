import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckOutlined = ({
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
    <path d="m5.708 10.65 7.399-7.807a1.063 1.063 0 0 1 1.572.01 1.244 1.244 0 0 1-.01 1.678l-8.174 8.626a1.06 1.06 0 0 1-1.557.006l-3.602-3.75a1.244 1.244 0 0 1-.02-1.678 1.063 1.063 0 0 1 1.572-.02z" />
  </svg>
);
export default SvgCheckOutlined;
