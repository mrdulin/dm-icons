import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownOutlined = ({
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
    <path d="M10.98 5.718a.743.743 0 1 1 1.052 1.053l-3.506 3.51a.743.743 0 0 1-1.052 0l-3.506-3.51A.745.745 0 0 1 5.02 5.718L8 8.702z" />
  </svg>
);
export default SvgDownOutlined;
