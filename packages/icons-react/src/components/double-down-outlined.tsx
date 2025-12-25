import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoubleDownOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
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
    <path d="M10.98 8.218a.743.743 0 1 1 1.052 1.053l-3.506 3.51a.743.743 0 0 1-1.052 0l-3.506-3.51A.745.745 0 0 1 5.02 8.218L8 11.202zm0-5a.743.743 0 1 1 1.052 1.053l-3.506 3.51a.743.743 0 0 1-1.052 0l-3.506-3.51A.745.745 0 0 1 5.02 3.218L8 6.202z" />
  </svg>
);
export default SvgDoubleDownOutlined;
