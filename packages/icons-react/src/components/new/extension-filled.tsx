import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExtensionFilled = ({
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
    <path d="M469.312 42.688a128 128 0 0 0-128 128h-256v256a128 128 0 1 1 0 256v256h256a128 128 0 1 1 256 0h256v-256a128 128 0 0 0 0-256v-256h-256a128 128 0 0 0-128-128" />
  </svg>
);
export default SvgExtensionFilled;
