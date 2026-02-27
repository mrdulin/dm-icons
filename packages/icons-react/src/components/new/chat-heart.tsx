import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatHeart = ({
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
    <path d="M64 85.312h896V768H293.376L64 968.704zm85.312 85.376v609.92l112-97.92h613.376v-512zM512 246.272a138.688 138.688 0 0 0-173.44 214.4L512 634.24 685.44 460.8A138.688 138.688 0 0 0 512 246.336zm-37.696 78.72 37.76 37.696 37.696-37.76a53.312 53.312 0 1 1 75.392 75.456L512 513.536 398.912 400.384a53.312 53.312 0 1 1 75.328-75.456z" />
  </svg>
);
export default SvgChatHeart;
