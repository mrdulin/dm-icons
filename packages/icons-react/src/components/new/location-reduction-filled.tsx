import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocationReductionFilled = ({
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
    <path d="M431.552 930.56c25.92 21.376 52.864 40.896 80.448 59.904 27.584-19.008 54.528-38.528 80.448-59.84a1201 1201 0 0 0 121.728-115.2C801.28 720.064 896 581.824 896 426.688a384 384 0 0 0-768 0C128 581.76 222.656 720 309.824 815.36a1202 1202 0 0 0 121.728 115.2m251.136-525.248v85.312H341.312v-85.312z" />
  </svg>
);
export default SvgLocationReductionFilled;
