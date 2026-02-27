import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIndicatorFilled = ({
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
    <path d="M441.728 42.688v128h140.544v-128h85.312v128h80.64l174.784 128-174.72 128H667.52v90.048h271.04v256H667.52v208.64h-85.248v-208.64H441.728v208.64h-85.376v-208.64h-80.64l-174.72-128 174.72-128h80.64v-90.048H85.312v-256h271.04v-128zm140.544 384H441.728v90.048h140.544z" />
  </svg>
);
export default SvgIndicatorFilled;
