import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAsteriskOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.354 6.882V3.646a.646.646 0 1 1 1.292 0v3.236l2.802-1.618a.646.646 0 1 1 .646 1.118L9.29 8l2.803 1.618a.646.646 0 1 1-.646 1.118L8.646 9.118v3.236a.646.646 0 1 1-1.292 0V9.118l-2.802 1.618a.646.646 0 1 1-.646-1.118L6.71 8 3.906 6.382a.646.646 0 0 1 .646-1.118z" />
  </svg>
);
export default SvgAsteriskOutlined;
