import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWarningCircleFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.3}
      d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11v1C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12v-1c6.075 0 11-4.925 11-11"
    />
    <circle cx={12} cy={12} r={8.5} fill="currentColor" />
    <path fill="#fff" d="M13 17h-2v-2h2zm0-3h-2V7h2z" />
  </svg>
);
export default SvgWarningCircleFilled;
