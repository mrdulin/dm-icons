import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentErrorFilled = ({
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
    <path d="M512 21.312a149.12 149.12 0 0 1 122.56 64h282.816v853.376H106.688V85.312H389.44a149.12 149.12 0 0 1 122.56-64M554.688 576V320h-85.312v256zm.192 63.808h-85.504v85.504h85.504z" />
  </svg>
);
export default SvgAssignmentErrorFilled;
