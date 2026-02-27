import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemRegulationFilled = ({
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
    <path d="M981.376 85.312H42.688V768h938.688zM298.688 426.688V256H384v170.688zm170.688-85.376V256h85.312v85.312zm256 85.376H640V256h85.376zm-256 170.624V384h85.312v213.312zm-85.376 0h-85.312v-128H384zm256 0v-128h85.376v128zm256 256H128v85.376h768z" />
  </svg>
);
export default SvgSystemRegulationFilled;
