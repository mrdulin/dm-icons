import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileCodeFilled = ({
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
    <path d="M128 42.688h426.688V384H896v139.328L648.64 768.192l42.88 42.496H469.312v170.624H128zM896 280.96v17.728H640v-256h17.664zm-4.8 487.232 118.4-117.248-59.968-60.672-179.776 177.92 179.776 177.92 60.032-60.672zM746.624 896h-192v85.312h192z" />
  </svg>
);
export default SvgFileCodeFilled;
