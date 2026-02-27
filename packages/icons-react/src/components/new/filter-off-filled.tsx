import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterOffFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m128.192 67.84-.192-.192L67.712 128l210.24 210.304L426.688 546.88V896h170.688V657.664L896 956.352l60.16-60.16L128 68.032zM651.52 470.912 896 128H308.672z" />
  </svg>
);
export default SvgFilterOffFilled;
