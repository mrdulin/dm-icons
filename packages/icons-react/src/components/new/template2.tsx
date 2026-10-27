import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTemplate2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 14 14"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.45}
      fillRule="evenodd"
      d="M6.94 12.7H1.297V9.513h5.641zm-4.502-1.138H5.8v-.912H2.438zM12.7 12.698H7.464v-6.67H12.7zM8.602 11.56h2.96V7.166h-2.96zM6.94 9.216H1.297V6.028h5.641zM2.437 8.077H5.8v-.911H2.438zM12.691 5.512H1.298V1.3H12.69zM2.438 4.373h9.115V2.438H2.438z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTemplate2;
