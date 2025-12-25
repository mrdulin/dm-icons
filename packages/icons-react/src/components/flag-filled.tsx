import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlagFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.93 3.692c-8.798 12.802-4.828-.597-12.266 5.647L5.355 16H3.453L0 2.403l1.743-.627C10.08-4.33 4.768 7.619 15.517 3.31c.343-.138.617.085.413.382" />
  </svg>
);
export default SvgFlagFilled;
