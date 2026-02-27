import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckCircleFilled1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6 11.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M3.75 5.293l1.5 1.5 3-3 .707.707L5.25 8.207 3.043 6z" />
  </svg>
);
export default SvgCheckCircleFilled1;
