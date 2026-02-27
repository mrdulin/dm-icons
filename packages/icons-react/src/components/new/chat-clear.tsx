import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatClear = ({
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
    <path d="M64 85.312h896V768H293.376L64 968.704zm85.312 85.376v609.92l112-97.92h613.376v-512zm241.984 74.944L512 366.336l120.64-120.704 60.352 60.352-120.704 120.704 120.704 120.64-60.352 60.352L512 487.04 391.296 607.68l-60.352-60.352 120.704-120.64L330.88 305.92l60.352-60.352z" />
  </svg>
);
export default SvgChatClear;
