import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundUpFilled = ({
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
    <path d="M213.376 277.312v469.376H42.688V277.312zm85.312 499.648 341.376 192V55.04l-341.376 192zM896 341.312h-85.312v128h-128v85.376h128v128H896v-128h128v-85.376H896z" />
  </svg>
);
export default SvgSoundUpFilled;
