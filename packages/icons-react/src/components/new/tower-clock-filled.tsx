import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTowerClockFilled = ({
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
    <path d="M458.624 469.312a53.312 53.312 0 1 1 106.688 0 53.312 53.312 0 0 1-106.688 0M737.6 124.352 512 39.744l-225.6 84.608 29.952 79.872 24.96-9.344v18.432h-128v512h85.312v256h426.688v-256h85.312v-512h-128V194.88l24.96 9.344zm-268.288 728.96v-128h85.312v128zM512 330.688A138.688 138.688 0 1 1 512 608a138.688 138.688 0 0 1 0-277.312" />
  </svg>
);
export default SvgTowerClockFilled;
