import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScreen4KFilled = ({
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
    <path d="M981.376 128H42.688v768h938.688zM640 428.672l42.688-30.144v-57.216H768V409.6a64 64 0 0 1-27.008 52.224L670.016 512l70.976 50.24A64 64 0 0 1 768 614.4v68.224h-85.312v-57.216L640 595.328v87.36h-85.312V341.312H640zm-341.312 58.944H384V341.312h85.376v341.376H384v-109.76h-85.312a85.31 85.31 0 0 1-85.312-85.248V341.312h85.312V487.68z" />
  </svg>
);
export default SvgScreen4KFilled;
