import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSound = ({
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
    <path d="M640 55.04v913.92L244.8 746.688H42.688V277.376H244.8zM213.312 362.688H128v298.688h85.312zm85.312 316.352 256.064 144V200.96l-256 144v334.08zm596.48-381.12 25.728 34.048a298.69 298.69 0 0 1-.128 360.128l-25.728 34.048-68.032-51.52 25.728-33.984a213.376 213.376 0 0 0 .064-257.28l-25.728-34.048zM776 387.84l25.664 34.048a149.31 149.31 0 0 1 0 180.032l-25.792 34.048-68.032-51.456 25.728-34.048a64 64 0 0 0 0-77.184l-25.664-34.048z" />
  </svg>
);
export default SvgSound;
