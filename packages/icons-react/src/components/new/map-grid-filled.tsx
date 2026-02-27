import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapGridFilled = ({
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
    <path d="M384 469.312V384h85.312v85.312zm170.624 0V384H640v85.312zm0 85.376H640V640h-85.376zm-85.312 0V640H384v-85.312zM938.624 85.312H85.312v853.376h853.312V85.376zM384 298.752h85.312V256h85.312v42.688H640V256h85.312v42.688H768V384h-42.688v85.312H768v85.376h-42.688V640H768v85.376h-42.688V768H640v-42.624h-85.376V768h-85.312v-42.624H384V768h-85.376v-42.624H256V640h42.624v-85.312H256v-85.312h42.624V384H256v-85.312h42.624V256H384v42.688z" />
  </svg>
);
export default SvgMapGridFilled;
