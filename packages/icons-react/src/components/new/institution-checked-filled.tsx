import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstitutionCheckedFilled = ({
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
    <path d="M469.376 36.48 896 273.6V384H42.688V273.536L469.376 36.544zM256 469.376v341.376h-85.312v-341.44H256zm256 0v341.376h-85.312v-341.44H512zm256 0v256h-85.312v-256zm196.096 296.128-241.28 241.28L571.904 856l60.352-60.352 90.496 90.496 181.056-180.992zM42.688 896H512v85.312H42.688z" />
  </svg>
);
export default SvgInstitutionCheckedFilled;
