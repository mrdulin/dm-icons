import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationErrorFilled = ({
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
    <path d="M170.635 341.333a341.301 341.301 0 0 1 682.666 0v200.442l85.31 127.996v183.546H85.325V669.771l85.31-127.996zm298.678-85.309v255.992h85.31V256.024zm85.502 319.99h-85.502v85.501h85.502zm-185.979 319.99a149.371 149.371 0 0 0 286.264 0z" />
  </svg>
);
export default SvgNotificationErrorFilled;
