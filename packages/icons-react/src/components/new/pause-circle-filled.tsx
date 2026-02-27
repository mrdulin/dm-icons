import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPauseCircleFilled = ({
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
    <path d="M512 42.688a469.312 469.312 0 1 1 0 938.624 469.312 469.312 0 0 1 0-938.624m-42.624 256h-128v426.624h128V298.624zm213.312 0h-128v426.624h128V298.624z" />
  </svg>
);
export default SvgPauseCircleFilled;
