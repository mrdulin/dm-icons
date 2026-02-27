import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPendingFilled = ({
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
    <path d="M512 981.312a469.312 469.312 0 1 0 0-938.624 469.312 469.312 0 0 0 0 938.624M256 554.88v-85.568h85.504v85.568zm213.376 0v-85.568h85.504v85.568zm298.816 0h-85.504v-85.568h85.504z" />
  </svg>
);
export default SvgPendingFilled;
