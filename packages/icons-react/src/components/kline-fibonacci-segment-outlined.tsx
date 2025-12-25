import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineFibonacciSegmentOutlined = ({
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
    <path d="M4.915 6a1.5 1.5 0 1 1 0-1h13.31a.5.5 0 0 1 0 1zm-2.19 2.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.28 3a.5.5 0 0 1 .5-.5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1-.5-.5m-.14 3a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5M20 17.5a1.5 1.5 0 0 1-2.915.5H3.505a.5.5 0 0 1 0-1h13.58a1.5 1.5 0 0 1 2.915.5" />
  </svg>
);
export default SvgKlineFibonacciSegmentOutlined;
