import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFingerprint2 = ({
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
    <path d="M938.624 469.312a426.688 426.688 0 1 0-853.312 0v128c0 112.64 24.32 219.776 67.968 316.288l17.536 38.848 77.76-35.2-17.6-38.848a680.1 680.1 0 0 1-60.352-281.088v-128a341.312 341.312 0 0 1 682.688 0v128h85.312zm-192 0a234.688 234.688 0 1 0-469.312 0v128c0 119.488 36.416 230.528 98.752 322.56L400 955.264l70.656-47.872-23.936-35.328a488.2 488.2 0 0 1-84.096-274.752v-128a149.312 149.312 0 0 1 298.688 0v128a192 192 0 0 0 192 192h85.312V704h-85.312c-58.88 0-106.688-47.744-106.688-106.688zm-277.312-42.624v170.624c0 144.64 80 270.528 197.952 336l37.248 20.672 41.408-74.56-37.248-20.736a298.56 298.56 0 0 1-154.048-261.376V426.688z" />
  </svg>
);
export default SvgFingerprint2;
