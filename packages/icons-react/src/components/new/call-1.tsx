import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCall1 = ({
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
    <path d="M684.928 76.224 726.08 87.36a298.69 298.69 0 0 1 210.368 210.56l11.136 41.152-82.368 22.208-11.136-41.152a213.31 213.31 0 0 0-150.272-150.4l-41.152-11.136zm-642.24 9.088h366.08l63.424 285.44-79.36 79.36a600.8 600.8 0 0 0 181.12 180.992l79.296-79.296 285.44 63.424v366.08H896c-170.56 0-329.6-50.048-462.912-136.32a857.7 857.7 0 0 1-254.08-254.08A849.54 849.54 0 0 1 42.752 128V85.312zm86.528 85.376a763.46 763.46 0 0 0 121.472 373.888 772.4 772.4 0 0 0 228.736 228.736c108.8 70.4 236.544 113.984 373.952 121.536v-211.2l-172.928-38.4-92.8 92.8-28.288-16A685.76 685.76 0 0 1 302.08 464.64l-16.064-28.288 92.8-92.8-38.4-172.864zm516.736 49.664 41.152 11.136a149.31 149.31 0 0 1 105.152 105.28l11.136 41.216-82.368 22.208-11.136-41.216a64 64 0 0 0-45.056-45.12l-41.216-11.136z" />
  </svg>
);
export default SvgCall1;
