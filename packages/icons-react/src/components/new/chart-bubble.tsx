import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartBubble = ({
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
    <path d="M170.624 85.312v768h768v85.376H85.312V85.312zm512 128a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.312zm-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m-128 256a85.312 85.312 0 1 0 0 170.688 85.312 85.312 0 0 0 0-170.688M256 597.376a170.688 170.688 0 1 1 341.312 0 170.688 170.688 0 0 1-341.312 0m469.312 0a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0" />
  </svg>
);
export default SvgChartBubble;
