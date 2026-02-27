import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatAddFilled = ({
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
    <path d="M896 128V0h-85.312v128h-128v85.312h128v128H896v-128h128V128zm-42.688 277.312c38.4 0 74.688-9.216 106.688-25.6V768H293.376L64 968.704V85.312h570.688a234.688 234.688 0 0 0 218.688 320z" />
  </svg>
);
export default SvgChatAddFilled;
