import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQueue = ({
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
    <path d="m938.624 85.376.192 785.792-85.504-85.44v-615.04l-554.624.064V85.44l640-.064zM85.312 256H768v682.688H85.312zm85.312 85.312v512h512v-512zm298.688 64v149.376h149.312V640H469.312v149.312H384V640H234.624v-85.312H384V405.312z" />
  </svg>
);
export default SvgQueue;
