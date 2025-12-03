import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuUnfoldOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 14 14"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.167 2.333h11.666V3.5H1.167zm-.002 3.5h4.429l-2.215 2.48zm5.252.584h6.416v1.166H6.417zM1.167 10.5h11.666v1.166H1.167z" />
  </svg>
);
export default SvgMenuUnfoldOutlined;
