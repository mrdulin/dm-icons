import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTeahouseFilled = ({
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
    <path d="M341.312 85.312V128h341.312V85.312H768V128h42.624v85.312H768v71.168l106.624 142.208h64V512H896v341.376h42.624v85.312H85.312v-85.312H128V512H85.312v-85.312h64L256 284.48v-71.168h-42.688V128H256V85.312zm0 128V256h341.312v-42.688zM810.624 512h-128v341.376h128zM597.312 853.376V512H426.624v341.376zm-256 0V512h-128v341.376z" />
  </svg>
);
export default SvgTeahouseFilled;
