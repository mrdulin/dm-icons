import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureSlideUp = ({
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
    <path d="m21.312 64.512 243.136.128v212.736h-85.312v-89.6a469.44 469.44 0 0 0 43.648 613.44l30.208 30.208-60.352 60.288-30.208-30.144a554.88 554.88 0 0 1-61.312-711.68H21.248V64.512zm405.632 304.384a32.256 32.256 0 1 0-55.808 32.256L585.088 771.84l-187.52 59.008-.512 7.68 221.632 91.584c9.28 3.84 19.84 3.136 28.48-1.92l261.76-151.104a32.32 32.32 0 0 0 15.552-34.432L876.16 506.88a32.256 32.256 0 0 0-31.488-25.792l-179.072-.832a32.3 32.3 0 0 0-16.256 4.288l-116.736 67.392-105.6-183.04zm-86.72-85.696a117.57 117.57 0 0 1 160.64 43.008l62.976 109.184 42.88-24.704a116.8 116.8 0 0 1 59.328-15.744l179.072.832c55.68.256 103.488 39.488 114.624 94.016l48.32 235.712a117.63 117.63 0 0 1-56.448 125.44l-261.76 151.168a117.63 117.63 0 0 1-103.744 6.848l-278.08-114.88 4.608-72.32c2.112-33.024 24.32-61.312 55.936-71.296l89.472-28.16L297.216 443.84a117.57 117.57 0 0 1 43.008-160.64" />
  </svg>
);
export default SvgGestureSlideUp;
