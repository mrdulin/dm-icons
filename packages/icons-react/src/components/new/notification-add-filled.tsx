import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationAddFilled = ({
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
    <path d="M170.635 341.333a341.301 341.301 0 0 1 682.666 0v200.442l85.31 127.996v183.546H85.325V669.771l85.31-127.996zm383.988 42.687V256.024h-85.31V384.02H341.317v85.31h127.996v127.995h85.31V469.33h127.996V384.02zM368.836 896.004a149.371 149.371 0 0 0 286.264 0z" />
  </svg>
);
export default SvgNotificationAddFilled;
