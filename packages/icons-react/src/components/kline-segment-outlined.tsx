import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineSegmentOutlined = ({
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
    <path d="M15.72 8.462a1.5 1.5 0 1 0-1.354-.854l-7 7a1.5 1.5 0 1 0 .707.707l7-7c.196.094.415.147.647.147" />
  </svg>
);
export default SvgKlineSegmentOutlined;
