import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartLineData = ({
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
    <path d="M170.624 85.312v768h768v85.376H85.312V85.312zM832 298.688a21.312 21.312 0 1 0 0 42.624 21.312 21.312 0 0 0 0-42.624M725.312 320a106.688 106.688 0 1 1 43.776 86.144l-343.04 200.32a106.688 106.688 0 1 1-42.88-73.792L726.016 332.48a109 109 0 0 1-.704-12.48M338.496 608a21.312 21.312 0 1 0-36.992 21.312A21.312 21.312 0 0 0 338.496 608" />
  </svg>
);
export default SvgChartLineData;
