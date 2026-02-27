import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSailingHotelFilled = ({
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
    <path d="m348.672 43.264-49.984-8.64V256H683.52C615.552 151.808 508.16 71.04 348.672 43.264m380.032 298.048H298.688v128h469.12a669.6 669.6 0 0 0-39.104-128m51.712 213.312H298.688v128H783.36c1.92-41.088 1.152-84.288-2.944-128M775.552 768H298.688v128h-128v85.312H896V896H747.008a739 739 0 0 0 28.544-128" />
  </svg>
);
export default SvgSailingHotelFilled;
