import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineVerticalRayLineOutlined = ({
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
    <path d="M11.666 19a1.5 1.5 0 0 1-.5-2.915v-4.17a1.5 1.5 0 0 1 0-2.83V4.5a.5.5 0 1 1 1 0v4.585a1.5 1.5 0 0 1 0 2.83v4.17a1.5 1.5 0 0 1-.5 2.915" />
  </svg>
);
export default SvgKlineVerticalRayLineOutlined;
