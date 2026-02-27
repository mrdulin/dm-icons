import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIpodFilled = ({
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
    <path d="M896 42.688H128v938.624h768zm-682.688 512V128h597.376v426.688h-85.376v-256H640v256h-85.312V213.312h-85.376v341.376H384V384h-85.312v170.688zm298.688 128a85.312 85.312 0 1 1 0 170.624 85.312 85.312 0 0 1 0-170.624" />
  </svg>
);
export default SvgIpodFilled;
