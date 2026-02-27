import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTableSplit = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312zm85.312 85.376V256h298.688v-85.312zm384 0V256h298.688v-85.312zm298.688 170.624H170.624v512h682.688zM469.248 426.56h85.504v85.504h-85.504zm-256 128h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504zm128 0h85.504v85.504h-85.504zm-256 128h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgTableSplit;
