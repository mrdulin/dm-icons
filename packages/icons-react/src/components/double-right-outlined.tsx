import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleRightOutlined = ({
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
    <path d="M8.218 5.02a.743.743 0 1 1 1.053-1.052l3.51 3.506c.292.29.292.761 0 1.052l-3.51 3.506a.745.745 0 0 1-1.053-1.052L11.202 8zm-5 0a.743.743 0 1 1 1.053-1.052l3.51 3.506c.292.29.292.761 0 1.052l-3.51 3.506a.745.745 0 0 1-1.053-1.052L6.202 8z" />
  </svg>
);
export default SvgDoubleRightOutlined;
