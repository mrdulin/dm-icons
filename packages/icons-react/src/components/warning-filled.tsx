import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarningFilled = ({
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
    <path d="m9.112.62 6.742 12.222c.372.642 0 1.158-.737 1.158H.82c-.635 0-1.028-.405-.704-1.158L6.876.62c.464-.81 1.751-.842 2.236 0M8.052 4c-.592.02-.987.394-.94.938v3.75c.457-.151.684 0 .94 0 .263 0 .48-.151.941 0v-3.75c.049-.587-.428-.957-.94-.937m0 7.875c.52 0 .941-.42.941-.937a.94.94 0 0 0-.94-.938.94.94 0 0 0-.942.938c0 .518.421.937.941.937" />
  </svg>
);
export default SvgWarningFilled;
