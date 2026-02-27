import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPantone = ({
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
    <path d="m612.16 0 135.616 190.08 89.536-30.528 81.664 239.04h62.4v497.792H42.688V398.592h70.464zM143.04 483.904l-.128.128H128v327.04h768V483.84H143.104zm685.76-85.312L784.576 269.12l-68.48 21.888-315.584 107.584zM663.424 218.88l-68.416-95.936L334.72 330.88l328.768-112.128zM225.536 604.8h85.504v85.44h-85.504z" />
  </svg>
);
export default SvgPantone;
