import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPenMarkFilled = ({
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
    <path d="m1004.992 293.504-265.664-265.6-569.6 569.472-24.064 120.64 169.152 169.216 120.64-24.128 569.6-569.6zm-945.92 543.36 136.96 136.832 60.352-60.288-136.96-136.96L59.136 836.8z" />
  </svg>
);
export default SvgPenMarkFilled;
