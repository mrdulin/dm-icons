import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileDownload = ({
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
    <path d="M123.314 41.125h510.274l229.61 229.55v243.051H781.01V369.942H534.382V123.314h-328.88v739.884h328.88v82.19H123.314zm493.256 99.268v147.36h147.36zm205.503 435.052V867.7l103.09-101.919 57.835 58.451-201.988 199.707L579.02 824.231l57.773-58.45 103.09 101.918V575.445z" />
  </svg>
);
export default SvgFileDownload;
