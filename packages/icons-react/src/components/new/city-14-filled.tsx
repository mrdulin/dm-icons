import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity14Filled = ({
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
    <path d="M243.2 189.568 512 82.048l268.8 107.52-31.68 79.232-23.744-9.536v82.048h256v597.376H554.688V640h-85.312v298.688H42.688V341.312h256v-82.048l-23.744 9.536zM128 853.312h170.688V426.688H128zm597.376-426.624v426.624H896V426.688zM554.88 298.56h-85.504v85.504h85.504z" />
  </svg>
);
export default SvgCity14Filled;
