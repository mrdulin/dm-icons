import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditFilled = ({
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
    <path d="M792.768 125.632a85.31 85.31 0 0 0-120.704 0l-70.144 70.144L828.16 422.08l70.208-70.208c33.28-33.28 33.28-87.36 0-120.64zm-24.96 356.8-226.24-226.304-376.96 376.96-45.952 272.256 272.256-45.952 376.96-376.96z" />
  </svg>
);
export default SvgEditFilled;
