import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSaveFilled = ({
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
    <path d="M341.312 85.312v85.376h128V85.312zm-85.312 0V256h298.624V85.312h145.728l238.272 238.336v615.04H768V640H256v298.688H85.312V85.312zm85.312 853.376h341.312V725.312H341.312z" />
  </svg>
);
export default SvgSaveFilled;
