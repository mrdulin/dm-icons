import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpCircle = ({
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
    <path d="M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768M42.688 512a469.312 469.312 0 1 1 938.688 0 469.312 469.312 0 0 1-938.688 0M512 259.648l231.04 231.04-60.352 60.288-128-128v323.712h-85.312V422.976l-128 128-60.352-60.288z" />
  </svg>
);
export default SvgArrowUpCircle;
