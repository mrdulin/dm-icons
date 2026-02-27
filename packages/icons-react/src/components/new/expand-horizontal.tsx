import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExpandHorizontal = ({
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
    <path d="M149.312 170.688v682.624H64V170.688zM174.272 512 384 302.336l60.352 60.352-106.688 106.624h348.672L579.648 362.688 640 302.336 849.664 512 640 721.664l-60.352-60.352 106.688-106.624H337.664l106.688 106.624L384 721.664 174.336 512zM960 170.688v682.624h-85.312V170.688z" />
  </svg>
);
export default SvgExpandHorizontal;
