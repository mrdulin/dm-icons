import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatBubbleLockedFilled = ({
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
    <path d="M565.312 416a53.312 53.312 0 1 0-106.624 0v32h106.624zM512 42.688A469.312 469.312 0 0 0 150.208 810.88l-94.72 170.368H512a469.312 469.312 0 0 0 0-938.56M650.688 416v32h53.248v277.312h-384V448h53.376v-32a138.688 138.688 0 1 1 277.376 0" />
  </svg>
);
export default SvgChatBubbleLockedFilled;
