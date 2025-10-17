import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
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
      d="M8 2.667a2.333 2.333 0 1 0 0 4.666 2.333 2.333 0 0 0 0-4.666M4.333 5a3.667 3.667 0 1 1 7.334 0 3.667 3.667 0 0 1-7.334 0M2 12.667a3.333 3.333 0 0 1 3.333-3.333h5.334A3.333 3.333 0 0 1 14 12.667v2H2zm3.333-2a2 2 0 0 0-2 2v.667h9.334v-.667a2 2 0 0 0-2-2z"
    />
  </svg>
);
export default SvgUserOutlined;
