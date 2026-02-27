import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoomOutFilled = ({
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
    <path d="M191.552 704.448a362.75 362.75 0 0 0 480.96 28.416l228.032 228.032 60.288-60.352L732.8 672.512a362.752 362.752 0 1 0-541.248 31.936m85.76-299.136h341.312v85.376H277.312z" />
  </svg>
);
export default SvgZoomOutFilled;
