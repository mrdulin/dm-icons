import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRadio1Filled = ({
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
    <path d="M298.688 597.312a85.312 85.312 0 1 1 170.688 0 85.312 85.312 0 0 1-170.688 0m682.688 341.312H42.688V272.256L531.072 28.16l38.208 76.288L266.112 256h715.264zM384 426.624A170.688 170.688 0 1 0 384 768a170.688 170.688 0 0 0 0-341.312zm426.688 42.688H640v85.376h170.688zm0 170.688H640v85.312h170.688z" />
  </svg>
);
export default SvgRadio1Filled;
