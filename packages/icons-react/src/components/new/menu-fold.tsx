import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuFold = ({
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
    <path d="M85.312 170.688h853.312V256H85.312zm0 179.328L266.688 512 85.312 674.048V349.952zM384 469.312h554.624v85.376H384v-85.44zM85.312 768h853.312v85.312H85.312z" />
  </svg>
);
export default SvgMenuFold;
