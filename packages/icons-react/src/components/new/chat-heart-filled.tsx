import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatHeartFilled = ({
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
    <path d="M960 85.312H64v883.392L293.376 768H960zM353.6 279.68a117.376 117.376 0 0 1 158.4-6.912 117.376 117.376 0 0 1 158.4 172.864L512 604.032l-158.4-158.4a117.31 117.31 0 0 1 0-165.952" />
  </svg>
);
export default SvgChatHeartFilled;
