import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPyramidMaya = ({
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
    <path d="M256 85.312h512v85.376h-42.688v170.688h85.312v128h42.688v128H896v128h42.624v256H85.312v-256H128v-128h42.624v-128h42.688v-128h85.312V170.688H256V85.376zm128 85.376v170.688h255.936V170.688zm170.624 256h-85.312V896h85.312zM640 896h213.312v-85.312h-42.688v-128H768v-128h-42.688v-128H640zm-256 0V426.688h-85.376v128H256v128h-42.688v128h-42.688V896zm85.312-682.752h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgPyramidMaya;
