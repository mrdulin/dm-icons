import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity4Filled = ({
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
    <path d="M640 192.832 789.312 73.344l149.312 119.488v745.856h-384v-256h-85.312v256h-384V192.832L234.624 73.344 384 192.832v164.8l128-64 128 64zm-469.376 40.96v619.52h128v-619.52l-64-51.2zm554.688 0v619.52h128v-619.52l-64-51.2zM597.312 512H426.624v85.312h170.688z" />
  </svg>
);
export default SvgCity4Filled;
