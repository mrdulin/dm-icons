import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudFilled = ({
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
    <path d="M170.688 426.688a298.688 298.688 0 0 1 585.472-83.52 256 256 0 0 1-30.784 510.144H256a213.312 213.312 0 0 1-84.8-409.088 303 303 0 0 1-.512-17.536" />
  </svg>
);
export default SvgCloudFilled;
