import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapCancel = ({
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
    <path d="M384 78.592 643.2 229.76l295.424-123.072v362.624h-85.312V234.624l-170.688 71.168v163.52h-85.312V301.824l-170.688-99.52v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.312V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zM647.296 544.32 768 664.96l120.704-120.64 60.288 60.352-120.64 120.64 120.64 120.704-60.288 60.352L768 785.664 647.296 906.368l-60.352-60.352 120.704-120.704-120.704-120.64z" />
  </svg>
);
export default SvgMapCancel;
