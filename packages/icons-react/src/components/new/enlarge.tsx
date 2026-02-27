import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnlarge = ({
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
    <path d="M805.184 458.112h-76.8v-108.16L520.32 558.208l-27.136-27.2-27.136-27.136 208.128-208.128h-108.16v-76.8h239.168v239.232zm153.664 500.736H65.088V65.088h893.76zm-816.96-357.12h173.376c61.824 0 112 50.112 112 112v168.32h454.784v-740.16h-740.16V601.6z" />
  </svg>
);
export default SvgEnlarge;
