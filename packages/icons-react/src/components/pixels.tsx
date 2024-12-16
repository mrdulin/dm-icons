import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPixels = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        fill="#B8CAE6"
        d="M3.667 10.667h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m0-4h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m4 4h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m-4-8h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1m8 8h.666a1 1 0 0 1 1 1v.666a1 1 0 0 1-1 1h-.666a1 1 0 0 1-1-1v-.666a1 1 0 0 1 1-1"
      />
      <rect
        width={2.667}
        height={2.667}
        x={6.667}
        y={6.667}
        fill="#B8CAE6"
        opacity={0.3}
        rx={1}
      />
    </g>
  </svg>
);
export default SvgPixels;
