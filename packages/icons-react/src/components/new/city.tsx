import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity = ({
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
    <path d="m85.312 64 341.312 142.208v220.48h512v512H85.312zm341.312 448v341.312H512V640h256v213.312h85.312V512zm256 341.312v-128h-85.312v128zm-341.312 0V263.104L170.624 192v661.312z" />
  </svg>
);
export default SvgCity;
