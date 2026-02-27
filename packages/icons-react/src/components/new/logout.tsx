import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogout = ({
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
    <path d="M904.768 512.192 652.48 764.544l-60.352-60.352L741.44 554.88H332.48v-85.312h408.96L592.128 320.192l60.352-60.288zm-486.976-320H204.48v640h213.312v85.376H119.104V106.88h298.688z" />
  </svg>
);
export default SvgLogout;
