import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShareFilled = ({
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
    <path d="M917.312 192a149.312 149.312 0 0 1-252.096 108.352l-306.56 177.024a149.76 149.76 0 0 1 0 69.248l306.56 177.024a149.312 149.312 0 1 1-42.56 73.92l-306.752-176.96a149.312 149.312 0 1 1 0-217.024l306.816-177.28A149.312 149.312 0 1 1 917.312 192" />
  </svg>
);
export default SvgShareFilled;
