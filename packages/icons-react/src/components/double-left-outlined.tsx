import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleLeftOutlined = ({
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
    <path d="M7.782 10.98a.743.743 0 1 1-1.053 1.052l-3.51-3.506a.743.743 0 0 1 0-1.052l3.51-3.506A.745.745 0 0 1 7.782 5.02L4.798 8zm5 0a.743.743 0 1 1-1.053 1.052l-3.51-3.506a.743.743 0 0 1 0-1.052l3.51-3.506a.745.745 0 0 1 1.053 1.052L9.798 8z" />
  </svg>
);
export default SvgDoubleLeftOutlined;
