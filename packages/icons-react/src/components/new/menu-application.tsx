import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuApplication = ({
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
    <path d="M128 128h128v128H128zm320 0h128v128H448zm320 0h128v128H768zM128 448h128v128H128zm320 0h128v128H448zm320 0h128v128H768zM128 768h128v128H128zm320 0h128v128H448zm320 0h128v128H768z" />
  </svg>
);
export default SvgMenuApplication;
