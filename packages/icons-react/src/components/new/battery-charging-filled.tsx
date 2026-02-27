import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBatteryChargingFilled = ({
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
    <path d="M528 220.672 455.36 176 222.272 554.688h256l-152.96 248.64 72.64 44.736L631.04 469.312h-256zm-528-7.36h357.184L107.776 618.688h256l-118.144 192H0zm896 597.376H496.128l249.408-405.376h-256l118.144-192H896zM1024 384v256h-85.312V384z" />
  </svg>
);
export default SvgBatteryChargingFilled;
