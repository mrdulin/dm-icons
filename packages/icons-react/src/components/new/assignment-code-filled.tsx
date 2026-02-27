import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentCodeFilled = ({
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
    <path d="M512 21.312a149.12 149.12 0 0 1 122.56 64h282.816v853.376H106.688V85.312H389.44a149.12 149.12 0 0 1 122.56-64M405.376 344.96 238.336 512l167.04 167.04 60.352-60.352L359.04 512l106.688-106.688zM785.728 512l-167.04-167.04-60.352 60.352L665.024 512 558.336 618.688l60.352 60.288z" />
  </svg>
);
export default SvgAssignmentCodeFilled;
