import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPiano = ({
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
    <path d="M42.688 128h938.688v768H42.688zM128 213.312V384h768V213.312zm768 256h-85.312v213.376h-85.312V469.312H640v213.376h-85.312V469.312h-85.312v213.376H384V469.312h-85.312v213.376h-85.312V469.312H128v341.376h768z" />
  </svg>
);
export default SvgPiano;
