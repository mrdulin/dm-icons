import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignLeftOutlined = ({
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
    <path d="M3 1h5a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2m0 4h10a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2m0 4h8a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2m0 4h10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2" />
  </svg>
);
export default SvgAlignLeftOutlined;
