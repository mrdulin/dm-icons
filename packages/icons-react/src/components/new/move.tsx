import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMove = ({
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
    <path d="M288 96h128v128H288zm320 0h128v128H608zM288 330.688h128v128H288zm320 0h128v128H608zM288 565.312h128v128H288zm320 0h128v128H608zM288 800h128v128H288zm320 0h128v128H608z" />
  </svg>
);
export default SvgMove;
