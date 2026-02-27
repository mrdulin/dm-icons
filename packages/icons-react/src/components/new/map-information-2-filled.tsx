import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapInformation2Filled = ({
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
    <path d="m512 606.464-.704-.448a771 771 0 0 1-53.12-38.912 622 622 0 0 1-63.04-59.648c-44.544-48.704-96.512-122.88-96.512-208.768a213.312 213.312 0 1 1 426.688 0c0 85.824-51.968 160-96.512 208.768-23.04 25.216-45.952 45.568-63.04 59.648-17.024 14.016-35.008 26.432-53.12 38.912zm64-307.84a64 64 0 1 0-128 0 64 64 0 0 0 128 0M298.624 426.688H132.48L80.32 896h863.36l-52.16-469.312H725.312V512h89.792l33.216 298.688H175.68L208.832 512h89.792z" />
  </svg>
);
export default SvgMapInformation2Filled;
