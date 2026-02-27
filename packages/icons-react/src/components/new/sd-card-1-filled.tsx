import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSdCard1Filled = ({
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
    <path d="M661.952 85.312 896 412.992v525.696H128V85.312zm-363.264 85.376h-85.376v170.624h85.376zm149.312 0h-85.312v170.624H448zm149.312 0H512v170.624h85.312z" />
  </svg>
);
export default SvgSdCard1Filled;
