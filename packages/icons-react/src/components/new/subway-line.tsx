import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSubwayLine = ({
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
    <path d="M298.624 85.312v128H689.92c12.864-36.352 41.664-65.152 78.08-78.016v-49.92h85.312v49.92a128 128 0 0 1 0 241.408v433.92H376.704a128.38 128.38 0 0 1-78.08 78.08v49.92h-85.312v-49.92a128.38 128.38 0 0 1-78.08-78.08h-49.92v-85.248h49.92c12.864-36.416 41.728-65.28 78.08-78.08V298.688h-128v-85.312h128v-128h85.312zm0 213.376v348.608c36.416 12.8 65.216 41.664 78.08 78.08H768V376.704a128.38 128.38 0 0 1-78.08-78.08H298.624zm512-85.312a42.688 42.688 0 1 0 0 85.312 42.688 42.688 0 0 0 0-85.312M256 725.376a42.688 42.688 0 1 0 0 85.312 42.688 42.688 0 0 0 0-85.312" />
  </svg>
);
export default SvgSubwayLine;
