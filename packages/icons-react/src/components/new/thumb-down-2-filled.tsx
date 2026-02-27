import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbDown2Filled = ({
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
    <path d="m500.48 924.352 73.152 24.32 158.08-355.584V85.312h-453.76a128 128 0 0 0-126.4 108.608l-50.56 328.576A128 128 0 0 0 227.52 669.952h165.12v104.704c0 67.904 43.456 128.256 107.904 149.76zm438.208-331.264V85.312h-121.6v507.776z" />
  </svg>
);
export default SvgThumbDown2Filled;
