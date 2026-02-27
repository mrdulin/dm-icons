import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculatorFilled = ({
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
    <path d="M128 42.688h768v256H128zm0 341.12h768v597.504H128zM469.312 640v-85.44H298.688V640zm256 0v-85.44H554.688V640zm-256 85.312H298.688v85.312h170.624zm256 85.312v-85.312H554.688v85.312z" />
  </svg>
);
export default SvgCalculatorFilled;
