import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThumbsDown = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.72 10C1.92 10 1.122 9.7.623 9c-.5-.5-.699-1.3-.6-2.1l.8-4.6C1.022 1 2.12 0 3.417 0H12v8c-.1 0-2.395 7.5-2.395 7.5 0 .3-.3.5-.599.5-1.197 0-1.996-.5-1.996-2v-4zM16 8h-2V0h2z" />
  </svg>
);
export default SvgThumbsDown;
