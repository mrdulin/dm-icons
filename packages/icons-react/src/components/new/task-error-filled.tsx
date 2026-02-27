import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaskErrorFilled = ({
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
    <path d="M682.688 42.688H341.312v170.624h341.376zM256 128H128v853.312h464a277.312 277.312 0 0 1 304-434.624V128H768v170.688H256zm735.68 803.328-60.288 60.352-120.704-120.704L689.984 991.68l-60.288-60.352 120.64-120.64L629.76 689.92l60.288-60.352 120.704 120.704 120.704-120.704 60.288 60.352-120.64 120.704 120.64 120.64z" />
  </svg>
);
export default SvgTaskErrorFilled;
