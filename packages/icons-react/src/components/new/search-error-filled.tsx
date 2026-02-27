import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearchErrorFilled = ({
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
    <path d="M672.512 732.864a361.4 361.4 0 0 1-210.56 77.504A277.312 277.312 0 0 0 87.68 489.6 362.688 362.688 0 1 1 732.8 672.512l228.096 228.032-60.352 60.352zm-299.456-106.88-60.352-60.352L192 686.336 71.36 565.632l-60.352 60.352 120.64 120.704-120.64 120.64L71.36 927.68 192 807.04l120.704 120.64 60.352-60.352-120.704-120.64L373.12 625.92z" />
  </svg>
);
export default SvgSearchErrorFilled;
