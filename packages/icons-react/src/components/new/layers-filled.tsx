import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayersFilled = ({
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
    <path d="m512 81.792 430.912 179.52L512 440.96 81.088 261.312zM85.312 425.856 512 609.664l426.688-183.808v93.056L512 702.592 85.312 518.912zm0 256L512 865.664l426.688-183.808v93.056L512 958.592 85.312 774.912z" />
  </svg>
);
export default SvgLayersFilled;
