import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity13Filled = ({
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
    <path d="M256 85.312h512v85.376h-42.624v170.624h256v597.376H554.688V640h-85.312v298.688H42.688V341.312h256V170.688H256zm-128 768h170.688V426.688H128zm768-426.624H725.376v426.624H896zM554.88 255.936h-85.504v85.504h85.504z" />
  </svg>
);
export default SvgCity13Filled;
