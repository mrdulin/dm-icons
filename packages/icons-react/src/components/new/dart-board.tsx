import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDartBoard = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M512 298.688a213.312 213.312 0 1 0 0 426.624 213.312 213.312 0 0 0 0-426.624M213.376 512a298.688 298.688 0 1 1 597.312 0 298.688 298.688 0 0 1-597.312 0m213.312 0a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0" />
  </svg>
);
export default SvgDartBoard;
