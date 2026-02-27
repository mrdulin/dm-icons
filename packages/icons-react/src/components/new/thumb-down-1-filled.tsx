import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbDown1Filled = ({
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
    <path d="m573.632 948.736-73.152-24.384a157.89 157.89 0 0 1-107.968-149.76V669.888H227.456a128 128 0 0 1-126.528-147.456l50.56-328.576A128 128 0 0 1 278.016 85.312H896v507.776H731.712z" />
  </svg>
);
export default SvgThumbDown1Filled;
