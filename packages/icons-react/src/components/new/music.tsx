import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusic = ({
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
    <path d="M853.312 124.288V768A128 128 0 1 1 768 647.296v-216.96L341.312 465.92v344.768A128 128 0 1 1 256 689.92V174.08zM256 810.688a42.688 42.688 0 1 0-85.376 0 42.688 42.688 0 0 0 85.376 0m85.312-430.4L768 344.768V216.96l-426.688 35.584v127.68zM768 768a42.688 42.688 0 1 0-85.376 0A42.688 42.688 0 0 0 768 768" />
  </svg>
);
export default SvgMusic;
