import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundDown = ({
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
    <path d="M640 55.04v913.92L244.8 746.688H42.688V277.312H244.8zM213.312 362.688H128v298.624h85.312zm85.312 316.352 256.064 144V200.96l-256 144v334.08zm384.064-209.728H1024v85.376H682.688z" />
  </svg>
);
export default SvgSoundDown;
