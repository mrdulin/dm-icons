import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocationEnlargement = ({
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
    <path d="M512 128a298.69 298.69 0 0 0-298.688 298.688c0 122.112 76.032 239.872 159.488 331.2A1116.4 1116.4 0 0 0 512 885.632a1115.7 1115.7 0 0 0 139.2-127.744c83.456-91.264 159.488-209.088 159.488-331.2A298.69 298.69 0 0 0 512 128m0 862.464-24.192-16.64-.128-.128-.256-.192-.896-.64a548 548 0 0 1-14.72-10.624 1202 1202 0 0 1-161.984-146.816C222.72 720.064 128 581.824 128 426.688a384 384 0 0 1 768 0c0 155.136-94.656 293.376-181.824 388.736a1201 1201 0 0 1-173.568 155.264l-3.2 2.24-.832.64-.256.128-.064.064L512 990.4zm42.688-713.152v128h128v85.312h-128v128h-85.376v-128h-128v-85.312h128v-128z" />
  </svg>
);
export default SvgLocationEnlargement;
