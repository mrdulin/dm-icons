import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMosque1Filled = ({
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
    <path d="M298.816 426.88v-85.568h-85.312v.128h-.192v85.44zm127.808-188.544L256 67.648 85.312 238.336v700.352h405.312V640h298.688v298.688h149.312V426.496h-43.712C884.352 320 796.16 234.048 682.624 216.576v-67.2h-85.312v67.2c-71.104 10.944-132.288 48.768-170.688 101.696zm-85.504 615.04H170.624V273.664L256 188.352l85.312 85.312zM576 725.312v213.376h128V725.312z" />
  </svg>
);
export default SvgMosque1Filled;
