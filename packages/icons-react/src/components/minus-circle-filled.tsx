import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMinusCircleFilled = ({
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
    <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m4 6.25H4l-.102.007A.75.75 0 0 0 4 8.75h8l.102-.007A.75.75 0 0 0 12 7.25" />
  </svg>
);
export default SvgMinusCircleFilled;
