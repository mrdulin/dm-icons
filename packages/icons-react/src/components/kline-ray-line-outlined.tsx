import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineRayLineOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.573 14.546a1.5 1.5 0 1 1-.707-.707l3-3a1.5 1.5 0 0 1 2-2l3.596-3.596a.5.5 0 1 1 .707.707l-3.596 3.596a1.5 1.5 0 0 1-2 2z" />
  </svg>
);
export default SvgKlineRayLineOutlined;
