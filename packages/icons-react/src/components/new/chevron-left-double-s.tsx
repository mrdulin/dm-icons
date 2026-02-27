import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronLeftDoubleS = ({
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
    <path d="m259.776 512 211.2-211.2 60.288 60.352L380.416 512l150.848 150.848-60.352 60.352-211.2-211.2zm232.96 0L704 300.8l60.352 60.352L613.44 512l150.848 150.848-60.352 60.352z" />
  </svg>
);
export default SvgChevronLeftDoubleS;
