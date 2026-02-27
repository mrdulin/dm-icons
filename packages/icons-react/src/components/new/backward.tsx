import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackward = ({
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
    <path d="M480 184.96v298.688l298.688-298.624V839.04L480 540.352V839.04L152.96 512zM273.664 512l120.96 120.96V391.04L273.728 512zm298.688 0 120.96 120.96V391.04z" />
  </svg>
);
export default SvgBackward;
