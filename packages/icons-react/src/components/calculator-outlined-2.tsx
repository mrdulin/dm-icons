import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculatorOutlined2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1m-2 7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1M4.25 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m4 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m0 4a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-4 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M13 5H3V2h10z" />
  </svg>
);
export default SvgCalculatorOutlined2;
