import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSimCard2 = ({
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
    <path d="M323.648 42.688H896v938.624H128v-743.04l195.648-195.52zM359.04 128 213.312 273.664V896h597.376V128H358.976zM512 426.688a42.69 42.69 0 0 0-42.688 42.624V512H384v-42.688a128 128 0 1 1 219.712 89.408l-1.216 1.216-78.528 68.736H640v85.376H384v-76.352l159.552-139.584A42.688 42.688 0 0 0 512 426.688" />
  </svg>
);
export default SvgSimCard2;
