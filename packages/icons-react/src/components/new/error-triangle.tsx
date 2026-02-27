import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgErrorTriangle = ({
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
    <path d="m512 42.688 509.952 883.2H2.112l509.952-883.2zM150.016 840.512H874.24L512 213.312l-362.112 627.2zm404.736-435.2V640h-85.376V405.312h85.312zM469.376 704h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgErrorTriangle;
