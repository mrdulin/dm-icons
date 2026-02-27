import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaste = ({
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
    <path d="M85.312 85.312h213.312v85.376h-128v128H85.312zm384 0h213.312v213.376h-85.312v-128h-128zM384 384h554.624v554.688H384zm85.312 85.312v384h384v-384zm-298.688-42.624v128h128V640H85.312V426.688z" />
  </svg>
);
export default SvgPaste;
