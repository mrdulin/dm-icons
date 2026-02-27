import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDartBoardFilled = ({
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
    <path d="M298.688 512a213.312 213.312 0 1 1 426.688 0 213.312 213.312 0 0 1-426.688 0M512 426.688a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624m0-384a469.312 469.312 0 1 1 0 938.624 469.312 469.312 0 0 1 0-938.624m0 170.624a298.688 298.688 0 1 0 0 597.376 298.688 298.688 0 0 0 0-597.376" />
  </svg>
);
export default SvgDartBoardFilled;
