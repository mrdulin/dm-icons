import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundHigh = ({
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
    <path d="M640 55.04v913.92L244.8 746.688H42.688V277.312H244.8zM213.312 362.688H128v298.624h85.312zm85.312 316.352 256.064 144V200.96l-256 144v334.08zm573.888-438.592 30.208 30.208a341.31 341.31 0 0 1 0 482.688l-30.208 30.208-60.288-60.352 30.144-30.208a256 256 0 0 0 0-361.984L812.224 300.8zm-135.68 135.808 60.288-60.352 30.144 30.144a234.69 234.69 0 0 1 0 331.904l-30.144 30.144-60.352-60.352 30.208-30.144a149.31 149.31 0 0 0 0-211.2l-30.208-30.144zm-15.104 15.04 30.08 30.208a128 128 0 0 1 0 180.992l-30.08 30.208-60.352-60.352 30.144-30.208a42.69 42.69 0 0 0 0-60.288l-30.144-30.208z" />
  </svg>
);
export default SvgSoundHigh;
