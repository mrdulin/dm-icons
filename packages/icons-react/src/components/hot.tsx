import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHot = ({
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
      <rect width={16} height={16} rx={2} />
      <path
        fill="#FF5023"
        d="M8.4 0C7 2.174 10.533 4.655 11.55 5.94c.66.836 1.05 1.861 1.05 2.97C12.6 11.72 10.093 14 7 14s-5.6-2.28-5.6-5.09q0-2.253 1.64-3.637a.76.76 0 0 1 .808-.094c.263.128.408.394.36.663q-.268 1.5 1.013 1.5c2.238 0-2.436-6.3 3.179-7.342m1.4 8.91c-.387 0-.7.284-.7.635 0 .703-.627 1.273-1.4 1.273-.387 0-.7.285-.7.637 0 .351.313.636.7.636 1.546 0 2.8-1.14 2.8-2.546 0-.351-.313-.636-.7-.636"
      />
    </g>
  </svg>
);
export default SvgHot;
