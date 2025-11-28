import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineHorizontalStraightLineOutlined = ({
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
    <path d="M12.415 11H18.5a.5.5 0 0 1 0 1h-6.085a1.5 1.5 0 0 1-2.83 0H3.5a.5.5 0 0 1 0-1h6.085a1.5 1.5 0 0 1 2.83 0" />
  </svg>
);
export default SvgKlineHorizontalStraightLineOutlined;
