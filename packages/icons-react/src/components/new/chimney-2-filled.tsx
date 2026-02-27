import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChimney2Filled = ({
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
    <path d="M170.624 85.312h298.688v252.8l13.632 88.576h455.68v512h-256v-256h-85.248v256H78.336l92.352-600.64V85.312zM384 344.576V170.688H256v173.888l-78.272 508.8h163.584V426.624h55.296z" />
  </svg>
);
export default SvgChimney2Filled;
