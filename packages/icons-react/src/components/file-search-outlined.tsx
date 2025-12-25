import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileSearchOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13 6.41a5 5 0 0 0-2-.415c-2.761 0-5 2.236-5 4.996a5 5 0 0 0 5 4.995h.007H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4.663a2 2 0 0 1 1.285.468 399 399 0 0 1 4.613 3.931q.474.411.439 1.338zM3 2.998a1 1 0 0 0 0 1.999h4a1 1 0 1 0 0-1.999zm0 3.997a1 1 0 0 0 0 1.998h1a1 1 0 1 0 0-1.998zm11.411 6.33 1.363 1.362a.77.77 0 1 1-1.09 1.088L13.21 14.3A3.595 3.595 0 0 1 8 11.087a3.595 3.595 0 0 1 3.596-3.593 3.595 3.595 0 0 1 2.815 5.83m-2.815-.143a2.096 2.096 0 1 0 .002-4.19 2.096 2.096 0 0 0-.002 4.19" />
  </svg>
);
export default SvgFileSearchOutlined;
