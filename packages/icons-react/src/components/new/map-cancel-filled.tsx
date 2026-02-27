import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapCancelFilled = ({
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
    <path d="M277.376 115.968 42.688 252.8v664.512l234.688-96.768zm85.312 690.88L576 932.8v-7.36a276.48 276.48 0 0 1-85.312-200.128 276.48 276.48 0 0 1 85.312-200V217.216L362.688 91.2zM896 106.688v372.544A276.16 276.16 0 0 0 768 448a276.5 276.5 0 0 0-106.624 21.248V203.392zm-7.296 437.632-120.64 120.704L647.36 544.32l-60.352 60.352 120.704 120.704-120.704 120.64 60.352 60.352 120.704-120.704 120.64 120.704 60.352-60.352-120.704-120.64 120.704-120.704z" />
  </svg>
);
export default SvgMapCancelFilled;
