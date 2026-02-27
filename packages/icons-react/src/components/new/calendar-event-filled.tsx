import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendarEventFilled = ({
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
    <path d="M341.312 170.688h341.312v-128H768v128h170.624V384H85.312V170.688H256v-128h85.312zm597.312 298.624v469.376H85.312V469.312zM789.312 618.688H618.624v170.624h170.688z" />
  </svg>
);
export default SvgCalendarEventFilled;
