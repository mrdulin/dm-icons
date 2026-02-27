import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStreetRoad1Filled = ({
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
    <path d="M938.624 85.312v853.376H85.312V85.376h853.312zM332.16 775.616 434.24 265.28l-83.648-16.768-102.08 510.336zm443.392-16.768L673.536 248.512l-83.712 16.768 102.08 510.336zm-220.8-332.16v-128h-85.504v128h85.312zm0 170.688v-128h-85.504v128h85.312zm0 170.688v-128h-85.504v128h85.312z" />
  </svg>
);
export default SvgStreetRoad1Filled;
