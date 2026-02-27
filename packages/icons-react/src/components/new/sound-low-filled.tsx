import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundLowFilled = ({
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
    <path d="M213.376 277.312v469.376H42.688V277.312zm85.312 499.648 341.376 192V55.04l-341.376 192zm528.576-430.912L797.12 315.84l-60.352 60.352 30.144 30.208a149.31 149.31 0 0 1 0 211.2l-30.144 30.08 60.352 60.416 30.144-30.208a234.69 234.69 0 0 0 0-331.84" />
  </svg>
);
export default SvgSoundLowFilled;
