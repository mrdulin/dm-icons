import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundUp = ({
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
    <path d="M640 55.04v913.92L244.8 746.688H42.688V277.312H244.8zM213.312 362.688H128v298.624h85.312zm85.312 316.352 256.064 144V200.96l-256 144v334.08zm512.064-337.728H896v128h128v85.376H896v128h-85.312v-128h-128v-85.376h128z" />
  </svg>
);
export default SvgSoundUp;
