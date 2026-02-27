import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam2Filled = ({
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
    <path d="M128 85.312h768v768h42.624v85.376h-384v-85.376h42.688V426.688H426.624v426.624h42.688v85.376h-384v-85.376H128zm85.376 768h127.872l.064-426.624h-128v426.624zm597.248-426.624h-128v426.624h128z" />
  </svg>
);
export default SvgDam2Filled;
