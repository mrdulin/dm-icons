import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDragDrop = ({
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
    <path d="M85.312 640V85.376H640v213.312h-85.376v-128h-384v384h128V640zm256 213.376v-512h512V576H768V426.688H426.624V768H576v85.376zm374.528 157.12L572.16 570.88l437.76 145.28-198.72 95.104-95.36 199.296z" />
  </svg>
);
export default SvgDragDrop;
