import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShimenFilled = ({
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
    <path d="m511.872 85.12 469.376 46.976V337.28l-125.12 12.48 43.008 588.864h-305.6l46.72-566.912L511.936 384l-124.288-12.16 42.24 566.848H124.736l43.008-588.864-125.12-12.48V132.096l469.312-46.912zM252.608 358.4l-36.16 495.04H337.92L301.376 363.2zm474.048 4.8-40.448 490.24H807.36L771.2 358.4l-44.544 4.672z" />
  </svg>
);
export default SvgShimenFilled;
