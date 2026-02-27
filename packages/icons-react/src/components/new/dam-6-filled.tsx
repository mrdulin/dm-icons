import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam6Filled = ({
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
    <path d="M896 85.312H128V256H85.312v85.312h853.312V256H896zm0 341.376H128v426.624H85.312v85.376H448v-85.376h-42.688v-192a106.688 106.688 0 1 1 213.312 0v192H576v85.376h362.624v-85.376H896z" />
  </svg>
);
export default SvgDam6Filled;
