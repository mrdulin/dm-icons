import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentCheckedFilled = ({
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
    <path d="M512 21.312a149.12 149.12 0 0 1 122.56 64h282.816v853.376H106.688V85.312H389.44a149.12 149.12 0 0 1 122.56-64M451.712 710.72l301.696-301.696-60.352-60.352-241.344 241.344-120.704-120.704-60.352 60.352z" />
  </svg>
);
export default SvgAssignmentCheckedFilled;
