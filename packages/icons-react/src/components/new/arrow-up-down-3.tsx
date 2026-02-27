import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpDown3 = ({
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
    <path d="m320 131.648 231.04 231.04-60.352 60.288-128-128v366.336h-85.376V295.04l-128 128-60.288-60.288zm426.688 231.04V728.96l128-128 60.352 60.352L704 892.352l-231.04-231.04 60.352-60.352 128 128V362.688z" />
  </svg>
);
export default SvgArrowUpDown3;
