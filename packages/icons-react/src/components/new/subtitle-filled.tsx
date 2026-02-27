import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSubtitleFilled = ({
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
    <path d="M981.376 128H42.688v768h938.688zM298.688 341.312h170.688v85.376H298.688v170.624h170.688v85.376H298.688a85.31 85.31 0 0 1-85.312-85.376V426.688c0-47.168 38.208-85.376 85.312-85.376m341.312 0h170.688v85.376H640v170.624h170.688v85.376H640a85.31 85.31 0 0 1-85.312-85.376V426.688c0-47.168 38.208-85.376 85.312-85.376" />
  </svg>
);
export default SvgSubtitleFilled;
