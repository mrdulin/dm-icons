import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartAdd = ({
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
    <path d="M853.312 0v128h128v85.312h-128v128H768v-128H640V128h128V0zm-768 85.312h469.312v85.376h-384v682.624h682.688V426.688h85.312v512H85.312zm469.312 256V768h-85.312V341.312zm-213.312 128V768H256V469.312zM768 554.688V768h-85.376V554.688z" />
  </svg>
);
export default SvgChartAdd;
