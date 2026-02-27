import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTable2Filled = ({
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
    <path d="M469.312 149.312H64v184.32h405.312zM64 418.944V605.12h405.312V418.88H64zm0 271.488v184.256h405.312V690.432zm490.688 184.256H960V690.432H554.688zM960 605.12V418.88H554.688v186.24zm0-271.552V149.376H554.688v184.192z" />
  </svg>
);
export default SvgTable2Filled;
