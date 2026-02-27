import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgApplicationFilled = ({
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
    <path d="M924.16 274.048v475.904L512 987.904 99.84 749.952V274.048L512 36.032zM512 460.736l-139.84-93.248-47.36 71.04 144.512 96.32v147.84h85.312v-147.84l144.512-96.32-47.36-71.04L512 460.8z" />
  </svg>
);
export default SvgApplicationFilled;
