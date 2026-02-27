import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShrink = ({
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
    <path d="m766.784 257.28 27.136 27.136-208.128 208.128h108.16v76.8H454.848V330.112h76.8v108.16l208.128-208.128 27.072 27.2zm192.064 701.568H65.088V65.088h893.76zm-816.96-357.12h173.376c61.824 0 112 50.112 112 112v168.32h454.784v-740.16h-740.16V601.6z" />
  </svg>
);
export default SvgShrink;
