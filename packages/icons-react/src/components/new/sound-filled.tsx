import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundFilled = ({
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
    <path d="M213.376 277.312v469.376H42.688V277.312zm85.312 499.648 341.376 192V55.04l-341.376 192zm622.144-445.056-25.728-34.048-68.096 51.456 25.728 34.048a213.376 213.376 0 0 1-.128 257.28l-25.728 33.984 68.096 51.456 25.728-33.984a298.69 298.69 0 0 0 .128-360.192m-119.168 89.984-25.728-34.048-68.096 51.456 25.728 34.048a64 64 0 0 1 0 77.184l-25.728 34.048 68.032 51.456 25.728-34.048a149.376 149.376 0 0 0 .064-180.096" />
  </svg>
);
export default SvgSoundFilled;
