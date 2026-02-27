import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCity3Filled = ({
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
    <path d="M640 85.312h298.624v853.376h-384v-256h-85.312v256h-384V85.312H384v213.376h256zm-469.376 768h128V170.688h-128zm554.688-682.624v682.624h128V170.688zm-128 298.624H426.624v85.376h170.688z" />
  </svg>
);
export default SvgCity3Filled;
