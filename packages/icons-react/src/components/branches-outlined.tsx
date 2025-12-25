import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBranchesOutlined = ({
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
    <path d="M11.202 2.4a2.4 2.4 0 0 1 2.4 2.4v4.902a3.2 3.2 0 1 1-1.6 0V4.801a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 1 1 0-1.6zM5.464.938A3.2 3.2 0 0 1 4 6.3v8.902a.8.8 0 0 1-1.6 0V6.3A3.2 3.2 0 1 1 5.465.937zM11.67 11.67a1.6 1.6 0 1 0 2.223 2.302 1.6 1.6 0 0 0-2.223-2.302M2.07 2.07A1.6 1.6 0 1 0 4.293 4.37 1.6 1.6 0 0 0 2.07 2.07" />
  </svg>
);
export default SvgBranchesOutlined;
