import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgControlPlatform = ({
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
    <path d="m512 36.48 426.624 237.056v476.928L512 987.456 85.312 750.464V273.536L512 36.544zM170.624 379.52v320.704l298.688 165.952V537.6zm384 486.656 298.688-165.952v-320.64L554.624 537.6v328.512zM512 463.744l303.744-160.832L512 134.144 208.192 302.912z" />
  </svg>
);
export default SvgControlPlatform;
