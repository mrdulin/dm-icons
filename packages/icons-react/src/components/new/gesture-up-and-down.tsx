import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureUpAndDown = ({
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
    <path d="m21.312 21.888 243.136.128v212.672h-85.312v-89.6a469.63 469.63 0 0 0 0 563.2v-89.6h85.312v212.736h-243.2v-85.312h79.808a555.14 555.14 0 0 1 0-638.848l-79.744-.064zm405.568 304.32a32.256 32.256 0 1 0-55.808 32.256l213.952 370.688-187.52 59.008-.512 7.68 221.632 91.584c9.28 3.84 19.84 3.2 28.48-1.92l261.76-151.04a32.32 32.32 0 0 0 15.552-34.56l-48.32-235.648a32.256 32.256 0 0 0-31.488-25.856l-179.008-.832a32.3 32.3 0 0 0-16.256 4.352l-116.736 67.328-105.6-183.04zm-86.656-85.696a117.57 117.57 0 0 1 160.64 43.072l62.976 109.12L606.72 368a116.8 116.8 0 0 1 59.328-15.744l179.072.832c55.68.256 103.488 39.488 114.624 94.08l48.32 235.648a117.63 117.63 0 0 1-56.448 125.44l-261.76 151.232a117.63 117.63 0 0 1-103.744 6.848l-278.08-114.944 4.608-72.256c2.112-33.024 24.32-61.44 55.936-71.296l89.472-28.16-160.832-278.528a117.57 117.57 0 0 1 43.008-160.64" />
  </svg>
);
export default SvgGestureUpAndDown;
