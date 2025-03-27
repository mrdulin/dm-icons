import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMedalFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10m0 1.934c1.1 0 2.1-.305 3-.712V16l-3-2.033L2 16v-4.778c.9.407 1.9.712 3 .712" />
  </svg>
);
export default SvgMedalFilled;
