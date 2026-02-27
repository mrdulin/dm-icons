import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftDownCircleFilled = ({
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
    <path d="M180.16 180.16a469.312 469.312 0 1 1 663.68 663.68 469.312 469.312 0 0 1-663.68-663.68m211.2 211.2-67.904 309.184 309.248-67.84-90.496-90.624L723.2 361.152 662.848 300.8 481.92 481.92l-90.56-90.624z" />
  </svg>
);
export default SvgArrowLeftDownCircleFilled;
