import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatOffFilled = ({
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
    <path d="M948.672 768 265.984 85.312H960V768zm50.176 170.88-60.16 60.16L707.648 768H293.376L64 968.704V124.352l-39.04-39.04 60.352-60.288.192.128-.192.192z" />
  </svg>
);
export default SvgChatOffFilled;
