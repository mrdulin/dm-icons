import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 10 10"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.083 2.917a2.083 2.083 0 1 0-4.166 0 2.083 2.083 0 0 0 4.166 0m1.459 5c0-1.15-.933-2.083-2.084-2.083H3.542c-1.151 0-2.084.932-2.084 2.083v.833h7.084z" />
  </svg>
);
export default SvgUserFilled;
