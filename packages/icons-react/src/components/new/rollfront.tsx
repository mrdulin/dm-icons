import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRollfront = ({
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
    <path d="M131.008 597.312a298.75 298.75 0 0 0 295.68 256h362.624V768H426.688a213.312 213.312 0 0 1 0-426.688H728.96L622.336 448l60.352 60.352 209.664-209.664L682.688 89.024l-60.352 60.288L728.96 256H426.688A298.69 298.69 0 0 0 128 554.688v42.624z" />
  </svg>
);
export default SvgRollfront;
