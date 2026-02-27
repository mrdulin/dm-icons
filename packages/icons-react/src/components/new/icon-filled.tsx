import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconFilled = ({
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
    <path d="M938.624 85.312H341.312v219.776a320.128 320.128 0 0 0 64 633.6 320.13 320.13 0 0 0 313.6-256h219.712zm-214.016 512a320 320 0 0 0-297.984-297.92V170.688h426.688v426.688h-128.64z" />
  </svg>
);
export default SvgIconFilled;
