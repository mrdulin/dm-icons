import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBuilding3Filled = ({
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
    <path d="M682.624 85.312H341.312v128h-128V384h597.312V213.312h-128zm-597.312 384h853.312v469.376h-256v-256H341.312v256h-256zm341.312 469.376V768h170.688v170.688z" />
  </svg>
);
export default SvgBuilding3Filled;
