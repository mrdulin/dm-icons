import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSaturationFilled = ({
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
    <path d="M813.504 301.632 512 2.944 210.432 301.632a420.48 420.48 0 0 0 0 598.592c166.592 164.992 436.48 164.992 603.072 0a420.48 420.48 0 0 0 0-598.592M768 597.184a256 256 0 0 1-256 256v-512a256 256 0 0 1 256 256" />
  </svg>
);
export default SvgSaturationFilled;
