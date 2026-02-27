import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapGrid = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312V85.376zm85.312 85.376v682.624h682.688v-682.56H170.624zM384 256v42.688h85.312V256h85.312v42.688H640V256h85.312v42.688H768V384h-42.688v85.312H768v85.376h-42.688V640H768v85.376h-42.688V768H640v-42.624h-85.376V768h-85.312v-42.624H384V768h-85.376v-42.624H256V640h42.624v-85.312H256v-85.312h42.624V384H256v-85.312h42.624V256zm0 128v85.312h85.312V384zm170.624 0v85.312H640V384zM640 554.688h-85.376V640H640zM469.312 640v-85.312H384V640z" />
  </svg>
);
export default SvgMapGrid;
