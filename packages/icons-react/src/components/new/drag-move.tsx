import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDragMove = ({
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
    <path d="M512 999.04 323.648 810.688 384 750.336l85.312 85.312v-280.96h-280.96L273.664 640l-60.352 60.352L25.024 512l188.288-188.352L273.664 384l-85.312 85.312h280.96v-280.96L384 273.664l-60.352-60.352L512 25.024l188.352 188.288L640 273.664l-85.312-85.312v280.96h280.96L750.336 384l60.352-60.352L999.04 512 810.688 700.352 750.336 640l85.312-85.312h-280.96v280.96L640 750.336l60.352 60.352z" />
  </svg>
);
export default SvgDragMove;
