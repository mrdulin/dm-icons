import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCheckRectangle = ({
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
    <path d="M85.312 85.312h853.312v853.376H85.312V85.376zm85.312 85.376v682.624h682.688v-682.56H170.624zM764.352 384 448 700.352 259.648 512 320 451.648l128 128 256-256z" />
  </svg>
);
export default SvgCheckRectangle;
