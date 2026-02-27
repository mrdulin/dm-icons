import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterOff = ({
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
    <path d="m128 67.648 785.728 785.664-60.352 60.352-234.688-234.688V896H405.376V546.944L210.496 270.72 67.712 128zM490.688 551.04v259.712h42.688v-216.96zM279.296 128h635.072L656.896 492.8l-69.76-49.216 162.56-230.208H405.76l-38.336.768z" />
  </svg>
);
export default SvgFilterOff;
