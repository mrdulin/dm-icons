import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHome = ({
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
    <path d="m512 51.136 426.624 355.52v532.032H85.312V406.656L512 51.2zm-85.376 802.176h170.688V640H426.624zm256 0h170.688V446.72L512 162.176 170.624 446.72v406.656h170.688V554.688h341.312z" />
  </svg>
);
export default SvgHome;
