import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftRightCircle = ({
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
    <path d="M128 512a384 384 0 1 0 768 0 384 384 0 0 0-768 0m384 469.312a469.312 469.312 0 1 1 0-938.624 469.312 469.312 0 0 1 0 938.624M216.96 640 384 472.96l60.352 60.352-64 64h216.96v85.376h-216.96l64 64L384 807.04zm209.728-298.688h216.96l-64-64L640 217.024 807.04 384 640 551.04l-60.288-60.352 64-64H426.624v-85.376z" />
  </svg>
);
export default SvgArrowLeftRightCircle;
