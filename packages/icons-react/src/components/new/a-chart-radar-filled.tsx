import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAChartRadarFilled = ({
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
    <path d="m469.44 63.552-392 284.8 392 127.36zM51.072 429.44l149.76 460.8L443.008 556.8zm218.816 510.976h484.416L512 606.976l-242.176 333.44zm553.408-50.176 149.696-460.672L581.12 556.8l242.176 333.312zm123.328-541.888L554.752 63.68v412.032z" />
  </svg>
);
export default SvgAChartRadarFilled;
