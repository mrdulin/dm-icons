import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCollapse = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.45}
      d="M14.667 14.667H1.333V1.333h13.334zm-12-1.334h6.666V2.667H2.667zm8 0h2.666V2.667h-2.666zm-2.79-5.78.577.468-.577.466-2.5 2.02L5 10.042l-.377-.466 1.922-1.554-1.922-1.554.754-.934z"
    />
  </svg>
);
export default SvgCollapse;
