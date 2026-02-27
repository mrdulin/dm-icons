import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartLineMulti = ({
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
    <path d="M170.624 85.312v768h768v85.376H85.312V85.312zM935.04 234.688 661.376 508.352 490.688 337.664 277.312 551.04l-60.352-60.288L490.624 216.96l170.688 170.688 213.312-213.312 60.352 60.352zm0 213.312L661.376 721.664 490.624 551.04 277.312 764.416 216.96 704l273.664-273.664L661.312 600.96l213.312-213.312L934.976 448z" />
  </svg>
);
export default SvgChartLineMulti;
