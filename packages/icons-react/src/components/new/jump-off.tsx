import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJumpOff = ({
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
    <path d="M956.352 896 128 67.648 67.712 128 128 188.352V896h707.712L896 956.352zm-206.016-85.312h-536.96v-536.96L451.712 512l-21.44 21.44 60.48 60.416 21.376-21.376zm145.92-67.456L896 618.688v-43.136h-85.312V657.6zM896 128H554.688v85.312h195.648l-192 192 60.352 60.352 192-192v195.648H896zm-447.552.064h-43.072l-124.544-.256L366.4 213.44h82.048V128z" />
  </svg>
);
export default SvgJumpOff;
