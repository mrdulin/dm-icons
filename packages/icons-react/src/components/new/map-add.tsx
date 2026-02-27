import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapAdd = ({
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
    <path d="m336.448 79.36 344.96 150.848 257.28-128.576v367.68h-85.376V239.68l-128 64v165.632H640V305.28l-256-112v463.104l99.84 49.92-38.208 76.288-102.4-51.2L85.312 886.08V255.104zm-37.76 579.2V209.92l-128 89.6v435.84zm512-146.56v170.688h170.624V768H810.624v170.688h-85.312V768H554.624v-85.312h170.688V512h85.312z" />
  </svg>
);
export default SvgMapAdd;
