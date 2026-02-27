import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTable = ({
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
    <path d="M85.312 938.688h853.312V85.312H85.312zm85.312-85.376V640h170.688v213.312zm256 0V640h170.688v213.312zm256 0V640h170.688v213.312zm170.688-298.624H682.624V341.312h170.688zm0-298.688H170.624v-85.312h682.688zm-682.688 85.312h170.688v213.376H170.624zm256 213.376V341.312h170.688v213.376z" />
  </svg>
);
export default SvgTable;
