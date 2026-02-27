import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronDownDoubleS = ({
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
    <path d="m512 764.16-211.2-211.2 60.352-60.416L512 643.392l150.848-150.848 60.352 60.352-211.2 211.2zm0-233.024-211.2-211.2 60.352-60.352L512 410.432l150.848-150.848 60.352 60.352z" />
  </svg>
);
export default SvgChevronDownDoubleS;
