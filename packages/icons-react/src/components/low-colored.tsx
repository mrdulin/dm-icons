import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLowColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={8} cy={8} r={8} fill="url(#paint0_linear_1320_3611)" />
    <path fill="#fff" d="M8.353 10.65h3.31v1.43h-5.04V3.92h1.73z" />
    <defs>
      <linearGradient
        id="paint0_linear_1320_3611"
        x1={8}
        x2={8}
        y1={6.182}
        y2={16}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.26} stopColor="#637EA4" />
        <stop offset={1} stopColor="#40516B" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLowColored;
