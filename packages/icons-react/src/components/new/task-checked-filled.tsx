import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaskCheckedFilled = ({
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
    <path d="M682.688 42.688H341.312v170.624h341.376zM256 128H128v853.312h421.376A277.312 277.312 0 0 1 896 564.544V128H768v170.688H256zm270.72 700.352L586.944 768l120.704 120.704 241.28-241.408 60.416 60.352-301.696 301.696-181.056-180.992z" />
  </svg>
);
export default SvgTaskCheckedFilled;
