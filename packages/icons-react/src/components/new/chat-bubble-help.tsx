import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatBubbleHelp = ({
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
    <path d="M512 128a384 384 0 0 0-278.912 647.936l21.504 22.72L200.512 896H512a384 384 0 0 0 0-768M42.688 512A469.312 469.312 0 1 1 512 981.312H55.488l94.72-170.368A467.58 467.58 0 0 1 42.688 512M512 320c-37.056 0-68.736 23.68-80.448 56.896l-14.208 40.192-80.448-28.416 14.208-40.256A170.688 170.688 0 1 1 617.6 539.52c-18.432 14.528-34.88 28.416-46.72 43.008-11.776 14.4-16.192 26.048-16.192 36.224v53.312h-85.312v-53.312c0-36.992 16.64-67.2 35.2-90.048 18.432-22.656 41.6-41.6 60.16-56.192A85.312 85.312 0 0 0 512 320m-42.624 394.688h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgChatBubbleHelp;
