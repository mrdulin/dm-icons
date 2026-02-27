import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPalace4Filled = ({
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
    <path d="m256 72.448 170.624 142.208V384h170.688V214.656L768 72.448l170.624 142.208v724.032H661.312V789.312a149.312 149.312 0 1 0-298.688 0v149.376H85.312V214.656zM853.312 384V254.656L768 183.552l-85.376 71.04V384zm-682.688 0h170.688V254.656L256 183.552l-85.376 71.04zM512 725.312a64 64 0 0 0-64 64v149.376h128V789.312a64 64 0 0 0-64-64" />
  </svg>
);
export default SvgPalace4Filled;
