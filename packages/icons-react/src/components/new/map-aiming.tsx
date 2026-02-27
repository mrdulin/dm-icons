import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapAiming = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0m512-327.104v50.624A279.94 279.94 0 0 1 788.48 469.312h50.624v85.312h-50.56A279.94 279.94 0 0 1 554.688 788.48v50.56h-85.312v-50.56A279.94 279.94 0 0 1 235.52 554.624h-50.56v-85.312h50.56A279.94 279.94 0 0 1 469.376 235.52v-50.624zM512 317.632a194.368 194.368 0 1 0 0 388.736 194.368 194.368 0 0 0 0-388.736m0 189.632a4.736 4.736 0 1 0 0 9.472 4.736 4.736 0 0 0 0-9.472M421.952 512a90.048 90.048 0 1 1 180.16 0 90.048 90.048 0 0 1-180.16 0" />
  </svg>
);
export default SvgMapAiming;
