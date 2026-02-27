import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileWordFilled = ({
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
    <path d="M128 42.688h426.688V384H896v597.312H128zm298.688 682.624V512h-85.376v213.312c0 47.168 38.208 85.376 85.376 85.376h170.624c47.168 0 85.376-38.208 85.376-85.376V512h-85.376v213.312h-42.624V512h-85.376v213.312zM896 280.96v17.728H640v-256h17.664z" />
  </svg>
);
export default SvgFileWordFilled;
