import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserFilled = ({
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
    <path d="M277.312 320a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0M128 810.688a213.31 213.31 0 0 1 213.312-213.376h341.376A213.31 213.31 0 0 1 896 810.688v128H128z" />
  </svg>
);
export default SvgUserFilled;
