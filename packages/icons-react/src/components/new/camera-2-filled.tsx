import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamera2Filled = ({
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
    <path d="M405.312 448a106.688 106.688 0 1 1 213.376 0 106.688 106.688 0 0 1-213.376 0M128 448a384 384 0 1 1 426.688 381.632v43.136a423.94 423.94 0 0 0 197.376-71.744l35.2-24.064 48.128 70.528-35.264 24a509.44 509.44 0 0 1-245.44 86.976V960h-27.84a521 521 0 0 1-29.696 0h-27.84v-1.536a509.4 509.4 0 0 1-245.44-86.976l-35.2-24 48-70.528 35.264 24.064a423.94 423.94 0 0 0 197.376 71.744v-43.136A384 384 0 0 1 128 448m192 0a192 192 0 1 0 384 0 192 192 0 0 0-384 0" />
  </svg>
);
export default SvgCamera2Filled;
