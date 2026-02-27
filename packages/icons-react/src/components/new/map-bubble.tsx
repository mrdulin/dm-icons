import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapBubble = ({
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
    <path d="M384 78.592 643.2 229.76l295.424-123.072v664.448L640 945.408 380.8 794.176 85.312 917.312V252.8zM170.624 301.824v487.488l216.512-90.24L640 846.656 853.376 722.24V234.624L636.8 324.928 384 177.408zM320 405.312A10.688 10.688 0 1 0 320 384a10.688 10.688 0 0 0 0 21.312m-74.688-10.688a74.688 74.688 0 1 1 149.312 0 74.688 74.688 0 0 1-149.312 0m352 53.376a10.688 10.688 0 1 0 0-21.376 10.688 10.688 0 0 0 0 21.376m-74.688-10.688a74.688 74.688 0 1 1 149.376 0 74.688 74.688 0 0 1-149.376 0m-96 160a10.688 10.688 0 1 0 0-21.312 10.688 10.688 0 0 0 0 21.312M352 586.624a74.688 74.688 0 1 1 149.312 0 74.688 74.688 0 0 1-149.312 0M704 640a10.688 10.688 0 1 0 0-21.312A10.688 10.688 0 0 0 704 640m-74.688-10.688a74.688 74.688 0 1 1 149.312 0 74.688 74.688 0 0 1-149.312 0" />
  </svg>
);
export default SvgMapBubble;
