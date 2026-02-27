import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBuilding4Filled = ({
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
    <path d="M85.312 426.688h853.312v512h-256v-256H341.312v256h-256zm341.312 512V768h170.688v170.688zM896 85.312H384v85.376h42.624v170.624h426.688V170.688H896zM640.128 213.248v85.504h-85.504v-85.504z" />
  </svg>
);
export default SvgBuilding4Filled;
