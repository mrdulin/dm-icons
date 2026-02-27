import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRemoteWaveFilled = ({
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
    <path d="M512.192 128a426.3 426.3 0 0 0-359.488 196.736l-23.04 35.968-71.872-46.08 23.04-35.904a511.62 511.62 0 0 1 431.36-236.032 511.62 511.62 0 0 1 431.36 236.032l23.04 35.904-71.872 46.08-23.04-35.968A426.3 426.3 0 0 0 512.192 128m-.512 170.24a213.12 213.12 0 0 0-179.776 98.368l-23.04 35.968-71.808-46.08 23.04-35.904A298.5 298.5 0 0 1 511.68 212.928c105.728 0 198.592 54.912 251.584 137.6l23.04 35.968-71.808 46.08-23.04-35.968A213.12 213.12 0 0 0 511.68 298.24M213.312 469.312h597.376v512H213.312zm256 170.688v85.504h85.568V640z" />
  </svg>
);
export default SvgRemoteWaveFilled;
