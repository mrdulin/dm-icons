import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoWindows = ({
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
    <path d="M938.624 78.784v433.28H512V139.712L938.624 78.72zm-341.312 135.04v212.864h256V177.216l-256 36.544zm-128-50.752V512h-384V226.24zm-298.688 135.68v127.936H384V263.616l-213.376 35.072zM85.312 554.624h384v345.6l-384-36.608V554.688zM170.624 640v146.112L384 806.4V640zM512 554.688h426.624v390.656L512 883.2zM597.312 640v169.344l256 37.312V640z" />
  </svg>
);
export default SvgLogoWindows;
