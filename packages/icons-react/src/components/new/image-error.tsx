import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageError = ({
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
    <path d="M85.312 85.312h853.312V512h-85.312V170.688H170.624v408.96L384 366.336l231.04 231.04-60.416 60.288L384 487.04 170.624 700.416v152.96H512v85.376H85.312zm586.56 224a42.688 42.688 0 1 0 0 85.376 42.688 42.688 0 0 0 0-85.376m-128 42.688a128 128 0 1 1 256 0 128 128 0 0 1-256 0m146.112 277.632 120.64 120.704 120.704-120.704 60.352 60.352-120.704 120.704 120.704 120.64-60.352 60.352-120.704-120.704-120.64 120.704-60.352-60.352 120.704-120.64-120.704-120.704z" />
  </svg>
);
export default SvgImageError;
