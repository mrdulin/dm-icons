import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapBubbleFilled = ({
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
    <path d="m643.2 229.76 295.424-123.072v664.448L640 945.408 380.8 794.176 85.312 917.312V252.8L384 78.592zM320 320a74.688 74.688 0 1 0 0 149.312A74.688 74.688 0 0 0 320 320m277.312 42.688a74.688 74.688 0 1 0 0 149.312 74.688 74.688 0 0 0 0-149.312M426.624 512a74.688 74.688 0 1 0 0 149.312 74.688 74.688 0 0 0 0-149.312M704 554.624A74.688 74.688 0 1 0 704 704a74.688 74.688 0 0 0 0-149.376" />
  </svg>
);
export default SvgMapBubbleFilled;
