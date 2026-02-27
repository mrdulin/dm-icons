import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUndertakeHoldUpFilled = ({
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
    <path d="M877.12 577.088a109.76 109.76 0 0 1 50.56 21.248 109.12 109.12 0 0 1-17.344 184.32l-1.152.512-159.552 68.096-264.32 66.048H0V608h174.336l87.552-87.552a138.7 138.7 0 0 1 53.376-33.088 228.608 228.608 0 0 1 324.8-318.272A228.608 228.608 0 0 1 947.712 506.56zM149.312 693.312h-64V832h64zM234.688 832h240l247.68-61.888 150.72-64.32a23.68 23.68 0 0 0-7.04-44.032 23.74 23.74 0 0 0-10.752.448l-.896.192-273.536 62.912H426.688V640H560a37.504 37.504 0 0 0 37.312-37.312A37.31 37.31 0 0 0 560 565.312H359.872a53.3 53.3 0 0 0-37.76 15.552l-87.424 87.488z" />
  </svg>
);
export default SvgUndertakeHoldUpFilled;
