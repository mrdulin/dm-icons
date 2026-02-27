import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapMarked = ({
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
    <path d="M384 78.592 643.2 229.76l295.424-123.072v320h-85.312v-192l-170.688 71.04v120.96h-85.312v-124.8L426.624 202.24v519.872l79.68 46.464-42.944 73.728-82.56-48.192L85.312 917.248V252.8zm-42.688 639.616V202.304l-170.688 99.52v487.488l170.688-71.04zm245.312-206.4h362.688V951.04L768.128 839.424 586.624 950.976zM672 597.184v201.152l96.128-59.136L864 798.272V597.12H672z" />
  </svg>
);
export default SvgMapMarked;
