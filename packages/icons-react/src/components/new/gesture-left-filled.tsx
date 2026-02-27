import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureLeftFilled = ({
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
    <path d="M170.688 344.32a106.688 106.688 0 1 0 0 213.376h170.624v83.584a128 128 0 0 0 17.472 64.512l102.784 176.192a128 128 0 0 0 151.04 56.96l259.84-86.656A128 128 0 0 0 960 730.816V386.368a128 128 0 0 0-49.92-101.44l-268.288-206.4-65.664 43.776c-28.8 19.2-43.136 53.824-36.352 87.744l26.88 134.272H170.624z" />
  </svg>
);
export default SvgGestureLeftFilled;
