import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSunFallFilled = ({
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
    <path d="M554.688 128v128h-85.312V128zm319.36 167.616-90.496 90.496L723.2 325.76l90.496-90.496zm-663.68-60.352L300.8 325.76l-60.288 60.352-90.56-90.432 60.352-60.352zM256 640v-42.688a256 256 0 1 1 512 0V640zM42.688 554.688h128V640h-128zm810.688 0h128V640h-128zM42.688 725.312h354.24L512 802.112l115.072-76.8h354.304v85.376H652.928L512 904.64l-140.928-93.952H42.688z" />
  </svg>
);
export default SvgSunFallFilled;
