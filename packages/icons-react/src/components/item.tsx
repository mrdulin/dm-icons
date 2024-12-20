import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgItem = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path d="M0 0h16v16H0z" />
      <path
        fill="#B8CAE6"
        d="M2 2.667h11.333c.369 0 .667.298.667.666v1.334a.667.667 0 0 1-.667.666H2a.667.667 0 0 1-.667-.666V3.333c0-.368.299-.666.667-.666m0 4h6.667c.368 0 .666.298.666.666v1.334a.667.667 0 0 1-.666.666H2a.667.667 0 0 1-.667-.666V7.333c0-.368.299-.666.667-.666m0 4h6.667c.368 0 .666.298.666.666v1.334a.667.667 0 0 1-.666.666H2a.667.667 0 0 1-.667-.666v-1.334c0-.368.299-.666.667-.666"
      />
      <rect
        width={3.333}
        height={6.667}
        x={10.667}
        y={6.667}
        fill="#B8CAE6"
        opacity={0.3}
        rx={1}
      />
    </g>
  </svg>
);
export default SvgItem;
