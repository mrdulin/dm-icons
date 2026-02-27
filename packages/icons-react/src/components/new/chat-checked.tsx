import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatChecked = ({
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
    <path d="M64 85.312h896V768H293.376L64 968.704zm85.312 85.376v609.92l112-97.92h613.376v-512zm604.032 152.96L451.648 625.344 270.72 444.352 331.008 384l120.64 120.704 241.344-241.408z" />
  </svg>
);
export default SvgChatChecked;
