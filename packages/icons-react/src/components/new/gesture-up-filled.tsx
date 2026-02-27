import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureUpFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M330.688 170.688a106.688 106.688 0 0 1 213.312 0v170.624h83.584a128 128 0 0 1 64.512 17.472l176.192 102.784a128 128 0 0 1 56.96 151.04l-86.656 259.84A128 128 0 0 1 717.184 960H372.672a128 128 0 0 1-101.44-49.92L64.896 641.792l43.776-65.664c19.2-28.8 53.76-43.136 87.68-36.352l134.336 26.88V170.624z" />
  </svg>
);
export default SvgGestureUpFilled;
