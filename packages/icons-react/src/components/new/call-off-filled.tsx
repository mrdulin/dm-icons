import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallOffFilled = ({
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
    <path d="m393.088 450.432-.192-.32 79.36-79.36-63.488-285.44H42.688V128a849.54 849.54 0 0 0 166.4 506.432zM68.032 896.192l828.16-828.16-.192-.192.192-.192L956.544 128 504.96 579.584a600 600 0 0 0 68.928 51.584l79.36-79.36 285.44 63.424v366.08H896a849.54 849.54 0 0 1-572.352-220.416L128.192 956.352z" />
  </svg>
);
export default SvgCallOffFilled;
