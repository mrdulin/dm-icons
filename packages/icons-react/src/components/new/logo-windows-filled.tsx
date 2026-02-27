import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoWindowsFilled = ({
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
    <path d="m426.624 162.112-341.312 51.2v256h341.312zm85.376-12.8v320h426.624v-384zm426.624 405.376H512v320l426.624 64zm-512 307.2v-307.2H85.312v256z" />
  </svg>
);
export default SvgLogoWindowsFilled;
