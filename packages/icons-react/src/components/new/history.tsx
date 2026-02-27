import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHistory = ({
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
    <path d="M960 512a448 448 0 0 0-810.688-263.04V106.688H64v298.624h298.624V320h-158.4a364.6 364.6 0 0 1 136-127.488 362.688 362.688 0 1 1-188.928 357.76l-4.48-42.496-84.8 8.896 4.48 42.432A448 448 0 0 0 959.872 512zM469.312 256v273.664L618.624 679.04l60.352-60.352-124.352-124.352V256z" />
  </svg>
);
export default SvgHistory;
