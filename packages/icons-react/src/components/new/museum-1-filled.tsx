import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMuseum1Filled = ({
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
    <path d="M725.376 430.976v-158.72l1.472 1.408 58.88-61.824-30.912-29.44A350.6 350.6 0 0 0 512 85.376 350.53 350.53 0 0 0 269.312 182.4L238.4 211.84l58.88 61.76 1.344-1.28v158.72a297.8 297.8 0 0 0-213.312-89.6H42.688v597.312h426.688V640h85.312v298.688h426.688V341.312h-42.688a297.73 297.73 0 0 0-213.312 89.6zm-597.376 0A213.376 213.376 0 0 1 298.688 640v213.312H128v-422.4zm768 422.4H725.376V640A213.376 213.376 0 0 1 896 430.912v422.4zm-341.12-554.88V384h-85.504v-85.44h85.504z" />
  </svg>
);
export default SvgMuseum1Filled;
