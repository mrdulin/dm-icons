import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUpOutlined = ({
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
    <path d="M5.02 10.282a.743.743 0 1 1-1.052-1.053l3.506-3.51a.743.743 0 0 1 1.052 0l3.506 3.51a.745.745 0 0 1-1.052 1.053L8 7.298z" />
  </svg>
);
export default SvgUpOutlined;
