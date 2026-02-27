import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMapAddFilled = ({
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
    <path d="M320 115.904 85.312 252.864v664.448L320 820.608v-704.64zm85.312 690.88 138.432 81.792a277.12 277.12 0 0 1 74.88-396.992V217.152L405.312 91.2zm533.312-700.16v400.064A278.14 278.14 0 0 0 704 455.424V203.392l234.688-96.768zm-128 576V512h-85.312v170.624H554.624V768h170.688v170.624h85.312V768h170.688v-85.376z" />
  </svg>
);
export default SvgMapAddFilled;
