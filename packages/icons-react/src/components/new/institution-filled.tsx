import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstitutionFilled = ({
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
    <path d="m512 36.48 426.624 237.056V384H85.312V273.536L512 36.544zM85.312 896h853.312v85.312H85.312zm213.312-85.312h-85.312V469.312h85.312zm256 0h-85.312V469.312h85.312zm256 0h-85.312V469.312h85.312z" />
  </svg>
);
export default SvgInstitutionFilled;
