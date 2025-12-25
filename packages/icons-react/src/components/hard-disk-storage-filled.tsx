import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHardDiskStorageFilled = ({
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
      d="M4.333 1.333h-3v13.334h13.334V1.333h-3v5.25H4.333z"
    />
    <path
      fill="currentColor"
      d="M10.333 1.333H5.667V5.25h4.666zm-1 1.334v2H8v-2z"
    />
  </svg>
);
export default SvgHardDiskStorageFilled;
