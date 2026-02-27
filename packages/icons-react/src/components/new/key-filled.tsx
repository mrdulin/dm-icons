import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyFilled = ({
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
    <path d="M160.32 331.008a256 256 0 0 1 433.408 138.304h344.96v85.376h-64V640h-85.376v-85.312h-42.688v127.936h-85.312v-128h-67.584a256 256 0 1 1-433.472-223.68z" />
  </svg>
);
export default SvgKeyFilled;
