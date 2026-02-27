import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartRing = ({
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
    <path d="M469.376 130.368a384 384 0 1 0 282.88 681.216l-90.56-91.84a256 256 0 1 1-192.32-460.16v-129.28zm85.312 0v129.216A256.19 256.19 0 0 1 764.48 469.376h129.216a384.13 384.13 0 0 0-339.008-339.008m339.008 424.32h-129.28a254.8 254.8 0 0 1-42.752 104.32l90.88 92.16a382.14 382.14 0 0 0 81.152-196.48M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M512 341.376a170.688 170.688 0 1 0 0 341.312 170.688 170.688 0 0 0 0-341.312" />
  </svg>
);
export default SvgChartRing;
