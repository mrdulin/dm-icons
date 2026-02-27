import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlayDemoFilled = ({
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
    <path d="M938.624 85.312H85.312v85.376H128V768h280.96L238.336 938.688l60.288 60.288L512 785.664l213.312 213.312 60.352-60.288L614.976 768H896V170.688h42.688V85.312zM625.728 426.688 426.688 576V277.312z" />
  </svg>
);
export default SvgPlayDemoFilled;
