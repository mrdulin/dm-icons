import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemStorageFilled = ({
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
    <path d="m673.664 85.376 264.96 264.96v588.352H85.312V85.376zm-375.04 85.312V384h170.688V170.688zm0 384V640h426.688v-85.312zm0 128V768h256v-85.312z" />
  </svg>
);
export default SvgSystemStorageFilled;
