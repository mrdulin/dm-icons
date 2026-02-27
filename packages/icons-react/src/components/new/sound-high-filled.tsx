import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundHighFilled = ({
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
    <path d="M213.376 277.312v469.376H42.688V277.312zm85.312 499.648 341.376 192V55.04l-341.376 192zM902.72 270.656l-30.208-30.208-60.288 60.352 30.144 30.144a256 256 0 0 1 0 362.048L812.224 723.2l60.288 60.288 30.208-30.08a341.31 341.31 0 0 0 0-482.752m-105.6 45.248-60.352 60.352 30.208 30.144a149.31 149.31 0 0 1 0 211.2l-30.208 30.144 60.352 60.352 30.144-30.144a234.69 234.69 0 0 0 0-331.904zm-45.248 286.592a128 128 0 0 0 0-180.992l-30.144-30.208-60.352 60.352 30.144 30.144c16.64 16.64 16.64 43.712 0 60.352l-30.144 30.208 60.352 60.352 30.08-30.208z" />
  </svg>
);
export default SvgSoundHighFilled;
