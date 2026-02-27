import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBatteryAdd = ({
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
    <path d="M341.312 21.312h341.376V128H896v874.688H128V128h213.312zm85.376 85.376v106.624H213.312v704h597.376v-704H597.312V106.688zm128 298.624v128h128v85.376h-128v128h-85.376v-128h-128v-85.376h128v-128z" />
  </svg>
);
export default SvgBatteryAdd;
