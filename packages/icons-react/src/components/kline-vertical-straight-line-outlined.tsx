import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineVerticalStraightLineOutlined = ({
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
    <path d="M11 12.415V18.5a.5.5 0 0 0 1 0v-6.085a1.5 1.5 0 0 0 0-2.83V3.5a.5.5 0 0 0-1 0v6.085a1.5 1.5 0 0 0 0 2.83" />
  </svg>
);
export default SvgKlineVerticalStraightLineOutlined;
