import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImage1 = ({
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
    <path d="M725.376 170.688a85.312 85.312 0 1 0 0 170.624 85.312 85.312 0 0 0 0-170.624M554.688 256A170.688 170.688 0 1 1 896 256a170.688 170.688 0 0 1-341.312 0m-170.88 91.52 191.68 298.112 104-166.4L1024 938.752H7.68zm.384 158.336-221.12 347.52h690.304l-167.488-223.36-109.376 174.976z" />
  </svg>
);
export default SvgImage1;
