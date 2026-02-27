import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDashboard1 = ({
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
    <path d="M85.312 85.312h384V384h-384zm85.312 85.376v128H384v-128zm384-85.376h384v469.376h-384zM640 170.688v298.624h213.312V170.688zM85.312 469.312h384v469.376h-384zm85.312 85.376v298.624H384V554.688zm384 85.312h384v298.688h-384zM640 725.312v128h213.312v-128z" />
  </svg>
);
export default SvgDashboard1;
