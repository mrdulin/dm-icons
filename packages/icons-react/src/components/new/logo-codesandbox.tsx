import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoCodesandbox = ({
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
    <path d="M99.84 274.048 512 36.032l412.16 238.016v475.904L512 987.904 99.84 749.952zM512 134.592 412.544 192 512 249.408 611.392 192zM696.704 241.28 512 347.904 327.232 241.28l-99.392 57.408L512 462.72l284.16-164.032-99.392-57.408zm142.08 131.264L554.624 536.64v328.128l99.84-57.6v-213.12l184.32-106.432V372.48zm0 213.568-98.944 57.216v114.56l99.008-57.216v-114.56zm-653.568-98.56 184.32 106.496v213.12l99.84 57.6V536.64L185.152 372.48v115.2zm0 98.56v114.56l99.008 57.152v-114.56z" />
  </svg>
);
export default SvgLogoCodesandbox;
