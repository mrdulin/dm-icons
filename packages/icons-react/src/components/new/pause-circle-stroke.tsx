import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPauseCircleStroke = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M448 298.688v426.624h-85.312V298.688zm213.376 0v426.624H576V298.688z" />
  </svg>
);
export default SvgPauseCircleStroke;
