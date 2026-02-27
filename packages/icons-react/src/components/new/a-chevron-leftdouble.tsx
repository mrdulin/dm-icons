import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAChevronLeftdouble = ({
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
    <path d="m785.664 320-192 192 192 192-60.352 60.352L472.96 512l252.352-252.352zm-277.376 0-192 192 192 192-60.352 60.352L195.648 512l252.288-252.352z" />
  </svg>
);
export default SvgAChevronLeftdouble;
