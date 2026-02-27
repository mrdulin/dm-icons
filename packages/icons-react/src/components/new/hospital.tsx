import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHospital = ({
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
    <path d="M170.624 85.312h682.688v85.376h-42.688v170.688h128v597.312H85.312V341.376h128V170.688h-42.688V85.376zm128 85.376v256h-128v426.688H384v-256h256v256h213.312V426.688h-128v-256zm256 682.624V682.688h-85.312v170.688h85.312zm0-640v85.376H640V384h-85.376v85.312h-85.312V384H384v-85.312h85.312v-85.312h85.312z" />
  </svg>
);
export default SvgHospital;
