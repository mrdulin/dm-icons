import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserBusinessFilled = ({
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
    <path d="M512 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376m-170.688 512A213.31 213.31 0 0 0 128 810.688v128h768v-128a213.31 213.31 0 0 0-213.312-213.376H623.68L512 820.736l-111.68-223.36h-59.008z" />
  </svg>
);
export default SvgUserBusinessFilled;
