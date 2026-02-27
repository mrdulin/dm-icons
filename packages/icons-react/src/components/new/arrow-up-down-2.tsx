import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpDown2 = ({
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
    <path d="M746.688 106.688V472.96l128-128 60.352 60.352L704 636.352l-231.04-231.04 60.352-60.352 128 128V106.688zM320 387.648l231.04 231.04-60.352 60.288-128-128v366.336h-85.376V551.04l-128 128-60.288-60.288z" />
  </svg>
);
export default SvgArrowUpDown2;
