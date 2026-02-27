import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWaveByeFilled = ({
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
    <path d="M440.192 198.016a58.56 58.56 0 0 1 82.944.128l224.128 225.344-18.944-46.72c-23.872-58.88 42.88-113.088 95.616-77.632 8 5.44 14.72 12.608 19.584 20.928l101.568 173.888a306.75 306.75 0 0 1-48 371.584l-36.032 36.032a306.75 306.75 0 0 1-433.792 0L212.48 686.72a58.688 58.688 0 0 1 82.944-83.008l68.48 68.48 22.592-22.656-157.44-157.44A58.624 58.624 0 0 1 312 409.088l157.44 157.44 22.656-22.592-215.744-215.744a58.688 58.688 0 1 1 82.944-83.072L575.04 460.864l22.656-22.592-157.504-157.504a58.56 58.56 0 0 1 0-82.816zM767.104 65.92l35.136 24.256A514.6 514.6 0 0 1 933.824 221.76l24.192 35.136-70.208 48.448-24.256-35.2a429.3 429.3 0 0 0-109.76-109.696l-35.136-24.256zm-630.912 652.8 24.192 35.072a429.3 429.3 0 0 0 109.824 109.76l35.072 24.256-48.384 70.272-35.2-24.256A514.6 514.6 0 0 1 90.176 802.24L65.92 767.104l70.272-48.448z" />
  </svg>
);
export default SvgWaveByeFilled;
