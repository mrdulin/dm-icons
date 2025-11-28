import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineHorizontalSegmentOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.915 12.5a1.5 1.5 0 1 1 0-1h9.17a1.5 1.5 0 1 1 0 1z" />
  </svg>
);
export default SvgKlineHorizontalSegmentOutlined;
