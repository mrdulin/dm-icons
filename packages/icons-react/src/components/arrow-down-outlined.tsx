import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 12"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m4.276 9.565 1.442-1.563a.745.745 0 0 1 1.062 0 .766.766 0 0 1 0 1.073l-2.459 2.591c-.209.215-.497.335-.797.334-.3 0-.584-.118-.796-.333L.22 9.076A.77.77 0 0 1 .22 8a.746.746 0 0 1 1.062 0l1.49 1.564V.75a.752.752 0 0 1 1.503 0z" />
  </svg>
);
export default SvgArrowDownOutlined;
