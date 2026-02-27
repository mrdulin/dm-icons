import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatMessageFilled = ({
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
    <path d="M960 85.312V768H293.376L64 968.704V85.312zm-490.688 384h85.568v-85.504h-85.568zm-213.312 0h85.504v-85.504H256zm426.688 0h85.504v-85.504h-85.504z" />
  </svg>
);
export default SvgChatMessageFilled;
