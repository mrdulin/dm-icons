import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCdFilled = ({
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
    <path d="M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0m618.688 0a149.312 149.312 0 1 0-298.688 0 149.312 149.312 0 0 0 298.688 0M512 192h-21.312v42.688H512A277.31 277.31 0 0 1 789.376 512v21.312H832V512a320 320 0 0 0-320-320" />
  </svg>
);
export default SvgCdFilled;
