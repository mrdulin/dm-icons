import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRatingReportOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h20v20H0z" />
      <path
        fill="currentColor"
        d="M10.277 6.557a.5.5 0 0 1 .219.219l1.86 3.656a.5.5 0 0 0 .376.268l4.136.583a.5.5 0 0 1 .273.858l-2.972 2.81a.5.5 0 0 0-.149.45l.704 3.983a.5.5 0 0 1-.72.532l-3.727-1.9a.5.5 0 0 0-.454 0l-3.728 1.9a.5.5 0 0 1-.72-.532L6.08 15.4a.5.5 0 0 0-.149-.45l-2.972-2.81a.5.5 0 0 1 .273-.858l4.136-.583a.5.5 0 0 0 .375-.268l1.861-3.656a.5.5 0 0 1 .673-.22M4 0a1 1 0 0 1 1 1v5.277a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm13 0a1 1 0 0 1 1 1v5.277a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-6.5 0a1 1 0 0 1 1 1v2.366a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z"
      />
    </g>
  </svg>
);
export default SvgRatingReportOutlined;
