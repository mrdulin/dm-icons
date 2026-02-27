import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHouses2 = ({
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
    <path d="M384 85.312v85.312h408.128l179.2 298.688H896v469.376H128V469.312H52.608l179.2-298.688h66.816V85.312zm-170.688 384v384H384V640h256v213.312h170.624v-384zM820.672 384l-76.8-128H280.064l-76.8 128h617.28zM554.624 853.312v-128h-85.312v128z" />
  </svg>
);
export default SvgHouses2;
