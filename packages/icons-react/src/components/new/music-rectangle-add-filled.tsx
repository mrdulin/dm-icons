import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusicRectangleAddFilled = ({
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
    <path d="M938.624 85.312H85.312v853.376h528.64a234.688 234.688 0 0 1 324.736-324.736V85.312zM640 298.688V384h-85.376v234.688a106.688 106.688 0 1 1-85.312-104.576V298.688zm213.312 554.624h128V768h-128V640H768v128H640v85.312h128v128h85.312z" />
  </svg>
);
export default SvgMusicRectangleAddFilled;
