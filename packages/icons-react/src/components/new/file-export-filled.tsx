import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileExportFilled = ({
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
    <path d="M554.688 42.688H128v938.624h421.376A277.312 277.312 0 0 1 896 564.544V384H554.688zm341.312 256V280.96L657.664 42.688H640v256zm124.096 512.064L812.8 601.088l-60.672 59.968L857.92 768.064H554.56v85.376h303.36L752.128 960.448l60.672 59.968z" />
  </svg>
);
export default SvgFileExportFilled;
