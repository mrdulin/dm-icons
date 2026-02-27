import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapSafetyFilled = ({
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
    <path d="M320 115.968 85.312 252.8v664.512L320 820.608zm85.312 690.88 85.312 50.368V426.688h128V217.216L405.312 91.2zm533.312-700.16v320H704V203.392zm21.248 405.248h-384v240.32a128 128 0 0 0 58.048 107.2l133.952 87.488 134.016-87.488a128 128 0 0 0 57.984-107.2V512z" />
  </svg>
);
export default SvgMapSafetyFilled;
