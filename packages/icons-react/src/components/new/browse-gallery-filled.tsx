import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrowseGalleryFilled = ({
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
    <path d="m857.728 98.432-29.568-30.72-61.568 59.072 29.568 30.72a510.14 510.14 0 0 1 142.528 354.56c0 137.536-54.208 262.4-142.528 354.432l-29.568 30.72 61.568 59.136 29.568-30.784A595.46 595.46 0 0 0 1024 512c0-160.448-63.36-306.24-166.272-413.568m-431.04-13.12a426.688 426.688 0 1 1 0 853.376 426.688 426.688 0 0 1 0-853.376m128 615.04L614.976 640 469.312 494.336v-216.96H384v252.288z" />
  </svg>
);
export default SvgBrowseGalleryFilled;
