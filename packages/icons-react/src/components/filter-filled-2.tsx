import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterFilled2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.895.553A1 1 0 0 0 15 0H1a1.001 1.001 0 0 0-.8 1.6L6 8v6c0 .553.508.74 1 1l2.021 1c.575 0 .979-.447.979-1V8l5.8-6.4c.227-.303.263-.708.095-1.047" />
  </svg>
);
export default SvgFilterFilled2;
