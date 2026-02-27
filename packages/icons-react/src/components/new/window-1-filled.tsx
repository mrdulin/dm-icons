import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWindow1Filled = ({
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
    <path d="m469.312 26.176 469.312 156.416v756.096H85.312V128h384V26.24zm384 810.624V585.408l-298.688-99.52V737.28zm0-341.312V244.096L554.624 144.64v251.328l298.688 99.584z" />
  </svg>
);
export default SvgWindow1Filled;
