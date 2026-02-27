import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleStoreyFilled = ({
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
    <path d="M85.312 426.688h853.312V512H896v341.312h42.624v85.376h-256V640H341.312v298.688h-256v-85.376H128V512H85.312zm341.312 512V725.312h170.688v213.376zm384-853.376H213.312v85.376H256v170.624h512V170.688h42.624zM554.752 170.56v85.504h-85.504V170.56z" />
  </svg>
);
export default SvgDoubleStoreyFilled;
