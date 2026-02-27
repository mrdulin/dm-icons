import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTaskMarkedFilled = ({
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
    <path d="M682.688 42.688H341.312v170.624h341.376zM256 128H128v853.312h416v-512h352V128H768v170.688H256zm373.312 426.496H992v439.232L810.816 882.112 629.312 993.664z" />
  </svg>
);
export default SvgTaskMarkedFilled;
