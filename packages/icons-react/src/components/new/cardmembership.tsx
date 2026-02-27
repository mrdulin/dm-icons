import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCardmembership = ({
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
    <path d="M981.376 128v768H42.688V128zM896 213.312H128V384h768zm0 256h-85.312v288.704l-149.312-89.6L512 758.016v-288.64H128v341.312h768zm-170.624 0h-128V607.36l64-38.4 64 38.4z" />
  </svg>
);
export default SvgCardmembership;
