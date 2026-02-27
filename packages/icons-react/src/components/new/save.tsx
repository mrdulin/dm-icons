import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSave = ({
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
    <path d="M85.312 85.312h615.04l238.272 238.336v615.04H85.312zm85.312 85.376v682.624H256v-256h512v256h85.312V359.04L664.96 170.688H554.624v170.624H256V170.688zm170.688 0V256h128v-85.312zm341.312 682.624V682.688H341.312v170.624z" />
  </svg>
);
export default SvgSave;
