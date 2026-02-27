import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationError = ({
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
    <path d="M170.635 341.333a341.301 341.301 0 0 1 682.666 0v200.442l85.31 127.996v183.546H699.258a192.058 192.058 0 0 1-374.516 0H85.325V669.771l85.31-127.996zM853.3 768.008v-72.446l-85.309-127.996V341.397a255.992 255.992 0 0 0-511.984 0v226.297L170.635 695.69v72.318zm-243.512 85.31H414.21a106.685 106.685 0 0 0 195.578 0m-55.166-597.294v255.992h-85.31V256.024zm-85.31 319.99h85.502v85.501h-85.502z" />
  </svg>
);
export default SvgNotificationError;
