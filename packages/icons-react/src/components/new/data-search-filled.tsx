import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDataSearchFilled = ({
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
    <path d="M85.312 85.312h853.312v384H85.312zm256.064 192h-85.504v85.568h85.504zM85.312 554.688H800a224 224 0 0 0-156.8 384H85.312zm256.064 106.624h-85.504v85.504h85.504zM800 618.688a160 160 0 1 0 78.848 299.2l70.464 70.4L1009.664 928l-70.4-70.4A160 160 0 0 0 800 618.624zm-74.688 160a74.688 74.688 0 1 1 149.312 0 74.688 74.688 0 0 1-149.312 0" />
  </svg>
);
export default SvgDataSearchFilled;
