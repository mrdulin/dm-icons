import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHospital1 = ({
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
    <path d="m512 70.848 444.224 394.88-56.64 63.808-46.208-41.088v450.176H170.688v-449.92l-46.72 40.832L67.84 465.28l117.248-102.592zM256 413.76v439.552h128V640h256v213.312h128V412.608L512.064 185.152l-256 228.608zm298.688 439.552v-128h-85.312v128zm0-554.688V384H640v85.312h-85.312v85.312h-85.312v-85.312H384V384h85.376v-85.376z" />
  </svg>
);
export default SvgHospital1;
