import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInk = ({
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
    <path d="M264.512 128h494.912v256.192h74.048l105.152 157.696V896H85.312V541.888l105.152-157.696h74.048zm85.312 256.192h324.288v-170.88H349.824zM236.16 469.504l-65.536 98.176v243.008h682.688V567.68l-65.472-98.24H236.16z" />
  </svg>
);
export default SvgInk;
