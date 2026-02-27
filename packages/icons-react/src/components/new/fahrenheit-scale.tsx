import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFahrenheitScale = ({
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
    <path d="M277.376 256a21.312 21.312 0 1 0 0 42.624 21.312 21.312 0 0 0 0-42.624m-106.688 21.312a106.688 106.688 0 1 1 213.312 0 106.688 106.688 0 0 1-213.312 0M469.376 256c0-47.168 38.208-85.312 85.312-85.312h298.688V256H554.688v213.312h298.688v85.312H554.688v298.688h-85.312z" />
  </svg>
);
export default SvgFahrenheitScale;
