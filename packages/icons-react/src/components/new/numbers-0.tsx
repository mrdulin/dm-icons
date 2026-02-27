import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNumbers0 = ({
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
    <path d="M725.376 256c0-47.168-38.208-85.312-85.376-85.312H384c-47.104 0-85.312 38.144-85.312 85.312v512c0 47.104 38.208 85.312 85.312 85.312h256c47.168 0 85.376-38.208 85.376-85.312zM384 256h256v512H384z" />
  </svg>
);
export default SvgNumbers0;
