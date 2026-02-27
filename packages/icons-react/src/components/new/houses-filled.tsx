import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHousesFilled = ({
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
    <path d="m511.872 70.72 444.352 395.072-56.64 63.744-46.208-41.024v450.176H661.312V640H362.624v298.688H170.688V488.704l-46.72 40.832L67.84 465.28 256 300.608V128h85.376v96.192zM448 938.688V725.312h128v213.376z" />
  </svg>
);
export default SvgHousesFilled;
