import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallOff = ({
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
    <path d="M956.352 128 504.96 579.456a603 603 0 0 0 68.992 51.648l79.36-79.296 285.44 63.424v366.08H896a849.54 849.54 0 0 1-572.48-220.48L128 956.352 67.712 896 896 67.648zM384 700.416a773 773 0 0 0 95.488 72.896c108.8 70.4 236.544 113.984 373.952 121.536v-211.2l-172.928-38.4-92.8 92.8-28.288-16a684.4 684.4 0 0 1-114.944-82.112zM42.688 85.376h366.08l63.424 285.44-79.552 79.552 12.672 21.504-73.536 43.328-46.208-78.464 93.184-93.184-38.4-172.864h-211.2a763.46 763.46 0 0 0 132.16 389.824l24.064 35.264-70.464 48.128-24.064-35.2A849.54 849.54 0 0 1 42.688 128V85.248z" />
  </svg>
);
export default SvgCallOff;
