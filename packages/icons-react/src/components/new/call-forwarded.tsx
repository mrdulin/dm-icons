import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallForwarded = ({
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
    <path d="M42.688 85.312h366.08l63.424 285.44-79.36 79.36a600.8 600.8 0 0 0 181.12 180.992l79.296-79.296 285.44 63.424v366.08H896c-170.56 0-329.6-50.048-462.912-136.32a857.6 857.6 0 0 1-254.08-254.08A849.54 849.54 0 0 1 42.752 128V85.312zm86.528 85.376a763.46 763.46 0 0 0 121.472 373.888 772.35 772.35 0 0 0 228.736 228.736c108.8 70.4 236.544 113.984 373.952 121.536v-211.2l-172.928-38.4-92.8 92.8-28.288-16A685.76 685.76 0 0 1 302.08 464.64l-16.064-28.288 92.8-92.8-38.4-172.864zm561.408-73.216 231.168 4.928 4.992 231.232-85.312 1.792-1.92-90.368-140.544 140.48-60.352-60.352L779.2 184.704l-90.432-1.92z" />
  </svg>
);
export default SvgCallForwarded;
