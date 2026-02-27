import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrowseGallery = ({
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
    <path d="m828.192 67.648 29.568 30.784A595.46 595.46 0 0 1 1024.032 512c0 160.512-63.36 306.24-166.272 413.568l-29.568 30.72-61.568-59.072 29.568-30.72A510.08 510.08 0 0 0 938.72 512c0-137.6-54.208-262.4-142.528-354.432l-29.568-30.784zM426.72 170.688a341.312 341.312 0 1 0 0 682.624 341.312 341.312 0 0 0 0-682.624M.032 512a426.688 426.688 0 1 1 853.312 0A426.688 426.688 0 0 1 .032 512m469.312-234.688v216.96L615.072 640l-60.288 60.352-170.752-170.688V277.312z" />
  </svg>
);
export default SvgBrowseGallery;
