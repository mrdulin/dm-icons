import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAirplayWaveFilled = ({
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
    <path d="M981.376 128H42.688v725.312H339.84L512 681.152l172.224 172.16h297.152zM723.2 485.696a298.69 298.69 0 0 0-422.4 0l-30.144 30.08-60.352-60.288 30.144-30.144a384 384 0 0 1 543.04 0l30.208 30.144-60.352 60.352zm-120.64 120.64a128 128 0 0 0-181.056 0L391.36 636.48l-60.352-60.288 30.208-30.208a213.31 213.31 0 0 1 301.696 0l30.144 30.208-60.352 60.288zm76.48 332.352L512 771.648l-166.976 167.04z" />
  </svg>
);
export default SvgAirplayWaveFilled;
