import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity2Filled = ({
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
    <path d="m256 29.824 170.624 142.208v291.52L640 285.824l298.624 248.832v404.032H789.312V640H490.624v298.688H85.312v-766.72L256 29.888zm85.312 823.488v-641.28L256 140.8l-85.376 71.168v641.344zM576 938.688V725.312h128v213.376z" />
  </svg>
);
export default SvgCity2Filled;
