import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFullscreenExit = ({
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
    <path d="m871.04 213.312-192 192h174.272v85.376h-320v-320h85.376V344.96l192-192 60.352 60.288zm-700.352 320h320v320h-85.376V679.04l-192 192-60.288-60.352 192-192H170.688z" />
  </svg>
);
export default SvgFullscreenExit;
