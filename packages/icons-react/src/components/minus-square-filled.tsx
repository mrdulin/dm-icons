import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMinusSquareFilled = ({
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
    <path d="M12.004 0A3.996 3.996 0 0 1 16 3.996v8.008A3.996 3.996 0 0 1 12.004 16H3.996A3.996 3.996 0 0 1 0 12.004V3.996A3.996 3.996 0 0 1 3.996 0zm0 6.65H3.996C3.26 6.65 2.65 7.258 2.65 8c0 .748.6 1.35 1.345 1.35h8.01c.736 0 1.345-.608 1.345-1.35 0-.748-.6-1.35-1.345-1.35" />
  </svg>
);
export default SvgMinusSquareFilled;
