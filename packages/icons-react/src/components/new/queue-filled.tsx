import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQueueFilled = ({
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
    <path d="m938.816 871.168-.192-785.792h-640l.064 85.376h554.624v614.976zM768 256H85.312v682.688H768zM618.624 640H469.312v149.312H384V640H234.624v-85.312H384V405.312h85.312v149.376h149.312z" />
  </svg>
);
export default SvgQueueFilled;
