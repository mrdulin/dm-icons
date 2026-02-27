import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartRadial = ({
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
    <path d="M512 128a384 384 0 1 0 384 384v-42.688h85.376V512A469.312 469.312 0 1 1 512 42.688h42.688V128zm0 170.688a213.312 213.312 0 1 0 150.016 61.568l-30.4-29.952 60.032-60.736 30.336 30.08A298.688 298.688 0 1 1 512 213.312h42.624v85.312H512zm0 170.624A42.688 42.688 0 1 0 554.688 512v-42.688H640V512a128 128 0 1 1-128-128h42.688v85.312z" />
  </svg>
);
export default SvgChartRadial;
