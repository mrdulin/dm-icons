import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPortraitFilled = ({
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
    <path d="M170.624 170.688V384H85.312V85.312H384v85.376zm682.688 0V384h85.312V85.312H640v85.376zM170.624 640v213.312H384v85.376H85.312V640zm682.688 213.312V640h85.312v298.688H640v-85.376zM512 298.688a128 128 0 0 1 56.192 243.008A192.06 192.06 0 0 1 704 725.376v42.496H320v-42.56c0-86.464 57.152-159.616 135.744-183.68A128 128 0 0 1 512 298.752z" />
  </svg>
);
export default SvgPortraitFilled;
