import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlag1Filled = ({
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
    <path d="M487.04 85.312H128V320h359.04l85.312 85.312h256.576l85.312-234.624H572.352l-85.376-85.376zm341.888 405.376H536.96l-85.312-85.376H128V960h85.312V640h238.336l85.376 85.312H914.24z" />
  </svg>
);
export default SvgFlag1Filled;
