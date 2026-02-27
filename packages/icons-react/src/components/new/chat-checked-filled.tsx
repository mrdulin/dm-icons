import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatCheckedFilled = ({
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
    <path d="M960 85.312V768H293.376L64 968.704V85.312zM451.648 625.344l301.696-301.696-60.352-60.352-241.344 241.408L330.88 384l-60.288 60.352L451.648 625.28z" />
  </svg>
);
export default SvgChatCheckedFilled;
