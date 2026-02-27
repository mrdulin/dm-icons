import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWifiOff1Filled = ({
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
    <path d="m128.192 67.84-.192-.192L67.648 128l91.456 91.52c-34.816 19.392-68.416 41.92-100.288 67.456l-33.28 26.688L512 921.6l155.264-193.984L896 956.352l60.16-60.16L128 68.032l.256-.192zm646.144 525.888L998.4 313.6l-33.28-26.688A725.44 725.44 0 0 0 331.392 150.72l442.88 443.008z" />
  </svg>
);
export default SvgWifiOff1Filled;
