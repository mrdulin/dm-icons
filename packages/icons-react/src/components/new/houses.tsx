import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHouses = ({
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
    <path d="m511.872 70.72 444.352 395.072-56.64 63.744-46.208-41.024v450.176H170.688V488.704l-46.72 40.832L67.84 465.28 256 300.608V128h85.376v96.192zM256 414.08v439.296h128v-256h256v256h128V412.608L512.192 185.216 326.784 352.128 256 414.016zm298.688 439.296V682.752h-85.312v170.624z" />
  </svg>
);
export default SvgHouses;
