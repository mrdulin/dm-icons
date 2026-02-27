import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPenBall = ({
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
    <path d="M731.968 58.624 965.44 292.096l-60.352 60.352-233.472-233.472zM612.48 179.456l232.192 232.192-528.96 527.04H85.376V708.48l527.04-528.96zm.128 120.832L170.688 743.68v109.696h109.696L723.84 411.52 612.544 300.288zm335.04 248.64L681.28 815.36l-60.352-60.352L887.296 488.64z" />
  </svg>
);
export default SvgPenBall;
