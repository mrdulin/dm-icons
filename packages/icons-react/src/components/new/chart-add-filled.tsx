import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChartAddFilled = ({
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
    <path d="M853.312 128V0H768v128H640v85.312h128v128h85.312v-128h128V128zM576 170.688c0-30.08 5.632-58.88 16-85.376H85.312v853.376h853.312V367.36A234.688 234.688 0 0 1 576 170.624zM554.624 768h-85.312V341.312h85.312zm-213.312 0H256V469.312h85.312zm341.312 0V554.688H768V768z" />
  </svg>
);
export default SvgChartAddFilled;
