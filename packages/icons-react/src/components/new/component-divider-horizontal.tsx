import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentDividerHorizontal = ({
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
    <path d="M554.624 85.312v853.376h-85.312V85.376h85.312zm-469.312 128H384v597.376H85.312V213.376zm85.312 85.376v426.688h128V298.688zM640 213.376h298.624v597.312H640zm85.312 85.312v426.688h128V298.688z" />
  </svg>
);
export default SvgComponentDividerHorizontal;
