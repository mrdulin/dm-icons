import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgApp = ({
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
    <path d="M85.312 85.312h384v384h-384zm85.312 85.376V384H384V170.688zm576 0a106.688 106.688 0 1 0 0 213.312 106.688 106.688 0 0 0 0-213.312m-192 106.624a192 192 0 1 1 384 0 192 192 0 0 1-384 0M85.312 554.688h384v384h-384zM170.624 640v213.312H384V640zm384-85.312h384v384h-384zM640 640v213.312h213.312V640z" />
  </svg>
);
export default SvgApp;
