import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundMute1Filled = ({
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
    <path d="M213.376 277.312v469.376H42.688V277.312zm85.312 499.648 341.376 192V55.04l-341.376 192zm554.688-325.312-90.496-90.496-60.352 60.352L792.96 512l-90.496 90.496 60.352 60.352 90.496-90.496 90.496 90.496 60.352-60.352L913.728 512l90.496-90.496-60.352-60.352z" />
  </svg>
);
export default SvgSoundMute1Filled;
