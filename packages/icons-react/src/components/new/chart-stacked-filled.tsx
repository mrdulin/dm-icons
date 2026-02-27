import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartStackedFilled = ({
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
    <path d="M170.624 853.312v-768H85.312v853.376h853.312v-85.376h-85.312V704h-256v149.312H512V704H256v149.312zM256 618.688h256V384H256zm341.312 0h256V213.312h-256z" />
  </svg>
);
export default SvgChartStackedFilled;
