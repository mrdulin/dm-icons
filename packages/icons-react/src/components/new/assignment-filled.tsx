import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentFilled = ({
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
    <path d="M512 21.312a149.12 149.12 0 0 0-122.56 64H106.688v853.376h810.688V85.312H634.56a149.12 149.12 0 0 0-122.56-64m213.376 277.376V384H298.688v-85.312zm0 170.624v85.376H298.688v-85.376zm-128 256H298.688V640h298.688z" />
  </svg>
);
export default SvgAssignmentFilled;
