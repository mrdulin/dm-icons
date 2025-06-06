import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmailFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14 2H2a2 2 0 0 0-2 2v3.333C0 7.702.298 8 .667 8h2.666a.667.667 0 1 1 0 1.333H.667a.667.667 0 0 0 0 1.334H2A.667.667 0 1 1 2 12H.847a.667.667 0 0 0-.6.967A2 2 0 0 0 2 14h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m.427 2.587L9.28 8.867a2 2 0 0 1-2.56 0l-5.147-4.28a.667.667 0 0 1 .854-1.02l5.146 4.28a.67.67 0 0 0 .854 0l5.146-4.28a.667.667 0 0 1 .854 1.026z" />
  </svg>
);
export default SvgEmailFilled;
