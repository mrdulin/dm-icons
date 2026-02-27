import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentChecked = ({
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
    <path d="M512 106.688a64 64 0 0 0-58.688 38.4l-11.136 25.6H192v682.624h640V170.688H581.888l-11.2-25.6a64 64 0 0 0-58.688-38.4M389.44 85.312a149.12 149.12 0 0 1 122.56-64 149.12 149.12 0 0 1 122.56 64h282.816v853.376H106.688V85.312zm363.968 323.712L451.712 710.72 270.656 529.664l60.352-60.352L451.712 590.08l241.344-241.344 60.352 60.352z" />
  </svg>
);
export default SvgAssignmentChecked;
