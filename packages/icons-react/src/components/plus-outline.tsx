import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlusOutline = ({
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
    <path d="M9.444 0v4.364a1.45 1.45 0 0 0 1.445 1.454H14.5v8c0 1.205-.97 2.182-2.167 2.182H3.667A2.174 2.174 0 0 1 1.5 13.818V2.182C1.5.977 2.47 0 3.667 0zm1.445.467q.025.027.049.057l3.178 3.84h-3.227z" />
  </svg>
);
export default SvgPlusOutline;
