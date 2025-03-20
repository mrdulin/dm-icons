import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayoutNineOutlined = ({
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
    <g fill="currentColor" transform="rotate(-180 9 9)">
      <rect width={4.5} height={4.4} y={13.6} rx={1} />
      <rect width={4.5} height={4.4} rx={1} />
      <rect width={4.5} height={4.4} y={6.8} rx={1} />
      <rect width={4.5} height={4.4} x={13.5} y={13.6} rx={1} />
      <rect width={4.5} height={4.4} x={13.5} rx={1} />
      <rect width={4.5} height={4.4} x={13.5} y={6.8} rx={1} />
      <rect width={4.5} height={4.4} x={6.75} y={13.6} rx={1} />
      <rect width={4.5} height={4.4} x={6.75} rx={1} />
      <rect width={4.5} height={4.4} x={6.75} y={6.8} rx={1} />
    </g>
  </svg>
);
export default SvgLayoutNineOutlined;
