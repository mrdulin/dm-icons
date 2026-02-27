import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWorkHistory = ({
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
    <path d="M320 106.688h384v170.624h234.624v192h-85.312V362.688H170.624V832h298.688v85.312h-384v-640H320zm85.312 170.624h213.312V192H405.312zM768 618.688a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.624M533.312 768a234.688 234.688 0 1 1 469.312 0 234.688 234.688 0 0 1-469.312 0m277.312-95.936v78.272l60.352 60.352-60.352 60.352-85.312-85.376v-113.6z" />
  </svg>
);
export default SvgWorkHistory;
