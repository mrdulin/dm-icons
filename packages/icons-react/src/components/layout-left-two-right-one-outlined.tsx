import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayoutLeftTwoRightOneOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="currentColor" transform="rotate(90 9 9)">
      <rect width={8} height={8} y={10} rx={1} />
      <rect width={8} height={8} x={10} y={10} rx={1} />
      <rect width={18} height={8} rx={1} />
    </g>
  </svg>
);
export default SvgLayoutLeftTwoRightOneOutlined;
