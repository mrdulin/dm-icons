import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationAdd = ({
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
    <path d="M170.635 341.333a341.301 341.301 0 0 1 682.666 0v200.442l85.31 127.996v183.546H699.258a192.058 192.058 0 0 1-374.516 0H85.325V669.771l85.31-127.996zM414.21 853.317a106.685 106.685 0 0 0 195.578 0zM512 85.341a255.99 255.99 0 0 0-255.992 255.992v226.361L170.635 695.69v72.318H853.3v-72.446l-85.309-127.996V341.397A255.99 255.99 0 0 0 512 85.405zm42.623 170.683V384.02h127.996v85.31H554.623v127.995h-85.31V469.33H341.317V384.02h127.996V256.024z" />
  </svg>
);
export default SvgNotificationAdd;
