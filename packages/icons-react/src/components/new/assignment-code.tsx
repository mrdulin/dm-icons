import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAssignmentCode = ({
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
    <path d="M106.688 85.312H389.44a149.12 149.12 0 0 1 122.56-64 149.12 149.12 0 0 1 122.56 64h282.816v853.376H106.688zm85.312 768h640V170.688H581.888l-11.2-25.6a64 64 0 0 0-117.376 0l-11.136 25.6H192zM238.336 512l167.04-167.04 60.288 60.352L359.04 512l106.624 106.688-60.288 60.352zm380.352-167.04L785.728 512l-167.04 167.04-60.352-60.352L665.024 512 558.336 405.312l60.352-60.288z" />
  </svg>
);
export default SvgAssignmentCode;
