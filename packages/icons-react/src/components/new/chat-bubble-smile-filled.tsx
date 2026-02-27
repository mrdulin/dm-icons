import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatBubbleSmileFilled = ({
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
    <path d="M512 42.688A469.312 469.312 0 0 0 150.208 810.88l-94.72 170.368H512a469.312 469.312 0 0 0 0-938.56m-156.48 537.6a170.688 170.688 0 0 0 312.96 0l17.152-39.168 78.144 34.176-17.088 39.104a256 256 0 0 1-469.312 0l-17.088-39.04 78.208-34.24 17.024 39.104z" />
  </svg>
);
export default SvgChatBubbleSmileFilled;
