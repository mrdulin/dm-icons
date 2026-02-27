import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatBubble1Filled = ({
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
    <path d="M512 42.688A469.312 469.312 0 0 0 150.208 810.88l-94.72 170.368H512a469.312 469.312 0 0 0 0-938.56m170.688 426.624H341.376V384h341.312zM597.376 640h-256v-85.312h256z" />
  </svg>
);
export default SvgChatBubble1Filled;
