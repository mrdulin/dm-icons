import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChatDouble = ({
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
    <path d="M42.688 85.312h810.688v597.376H248.32L42.688 829.568zM128 170.688v493.056l92.992-66.432H768V170.688zM1002.688 192v786.944L796.992 832H320v-85.312h504.32l93.056 66.432V192z" />
  </svg>
);
export default SvgChatDouble;
