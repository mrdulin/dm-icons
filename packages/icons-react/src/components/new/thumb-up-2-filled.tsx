import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbUp2Filled = ({
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
    <path d="m523.52 99.648-73.216-24.32-158.08 355.584v507.776h453.76a128 128 0 0 0 126.464-108.544l50.56-328.576A128 128 0 0 0 796.48 354.112H631.424V249.408c0-67.904-43.52-128.256-107.904-149.76M85.312 430.912v507.776h121.6V430.912z" />
  </svg>
);
export default SvgThumbUp2Filled;
