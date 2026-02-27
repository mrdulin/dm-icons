import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHouses2Filled = ({
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
    <path d="M384 170.624V85.312h-85.248v85.312h-66.88l-179.2 298.688h918.72l-179.2-298.688H384.064zm512 384H128v384h234.752v-256h298.624v256H896zM448.064 768v170.688h128V768z" />
  </svg>
);
export default SvgHouses2Filled;
