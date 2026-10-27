import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClockCircleTwoTone = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#B2B5B6"
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M12 0a12 12 0 1 1 0 24 12 12 0 1 1 0-24m0 1a11 11 0 1 0 0 22 11 11 0 1 0 0-22"
    />
    <circle cx={12} cy={12} r={8.5} fill="#979797" />
    <path fill="#FFF" d="M11 8h2v3.5h3.5v2H11Z" />
  </svg>
);
export default SvgClockCircleTwoTone;
