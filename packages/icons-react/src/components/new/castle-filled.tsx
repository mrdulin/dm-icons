import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCastleFilled = ({
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
    <path d="M298.688 85.312v85.376H384V85.312h85.376v85.376h85.312V85.312H640v85.376h85.376V85.312h85.312v512H896v-42.624h85.376v384h-320V597.312H362.688v341.376h-320v-384H128v42.624h85.376v-512zM576 938.688v-256H448v256z" />
  </svg>
);
export default SvgCastleFilled;
