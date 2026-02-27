import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGuitarFilled = ({
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
    <path d="M277.376 682.688a64 64 0 1 1 128 0 64 64 0 0 1-128 0m678.976-469.312L896 273.664l-42.624-42.624-24.96 24.96 21.248 21.376-60.288 60.288L768 316.352l-35.328 35.328a213.312 213.312 0 0 1-93.184 313.408 298.688 298.688 0 1 1-280.64-280.64 213.376 213.376 0 0 1 313.472-93.056L707.648 256l-21.312-21.312 60.352-60.352L768 195.648l24.96-24.96L750.4 128l60.352-60.352 145.664 145.728zm-615.04 320a149.312 149.312 0 1 0 0 298.624 149.312 149.312 0 0 0 0-298.688z" />
  </svg>
);
export default SvgGuitarFilled;
