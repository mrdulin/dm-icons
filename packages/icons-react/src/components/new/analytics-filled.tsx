import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnalyticsFilled = ({
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
    <path d="M938.624 85.312v853.376H85.312V85.312zM768 469.312v-128h-85.376v128zm-213.376 85.376v-128h-85.312v128zM341.312 768V512H256v256zM768 768V554.688h-85.376V768zm-213.376 0V640h-85.312v128z" />
  </svg>
);
export default SvgAnalyticsFilled;
