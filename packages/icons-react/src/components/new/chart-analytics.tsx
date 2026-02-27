import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartAnalytics = ({
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
    <path d="M170.624 85.312v768h768v85.376H85.312V85.312zm512 170.688h256v256h-85.312V402.048l-67.392 67.2-115.776 115.52L640 615.04 469.312 444.288 256 657.6l-60.352-60.288 273.664-273.728L640 494.272l85.696-85.44 67.648-67.52h-110.72z" />
  </svg>
);
export default SvgChartAnalytics;
