import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapEditFilled = ({
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
    <path d="M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88L448 832v-40.832l170.624-170.624V217.216L405.312 91.2zm533.312-700.16v382.72l-94.4-94.4L704 535.232v-331.84zm81.728 585.152L844.16 515.584 533.248 826.496v176.128h176.128l310.912-310.912zM744.512 736 800 791.488 674.112 917.376h-55.424v-55.488z" />
  </svg>
);
export default SvgMapEditFilled;
