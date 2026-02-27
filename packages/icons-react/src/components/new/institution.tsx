import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInstitution = ({
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
    <path d="m512 36.48 426.624 237.056V384H85.312V273.536L512 36.544zM215.808 298.752h592.32L512 134.144l-296.192 164.48zm82.816 170.624v341.376h-85.312v-341.44h85.312zm256 0v341.376h-85.312v-341.44h85.312zm256 0v341.376h-85.312v-341.44h85.312zM85.312 896h853.312v85.312H85.312z" />
  </svg>
);
export default SvgInstitution;
