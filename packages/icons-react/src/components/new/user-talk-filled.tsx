import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserTalkFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376M809.92 553.92l25.728 34.048a298.69 298.69 0 0 1-.128 360.128l-25.728 34.048-68.032-51.52 25.728-33.984a213.31 213.31 0 0 0 .064-257.28l-25.728-34.048 68.16-51.392zm-119.104 89.92 25.664 34.112a149.31 149.31 0 0 1 0 180.032l-25.792 34.048-68.032-51.456 25.728-34.048a64 64 0 0 0 0-77.184l-25.664-34.048 68.096-51.392zm-141.44-46.528A276.16 276.16 0 0 0 490.624 768c0 64.384 21.952 123.584 58.752 170.688H85.312v-85.376a256 256 0 0 1 256-256h208z" />
  </svg>
);
export default SvgUserTalkFilled;
