import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCastle2 = ({
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
    <path d="M469.376 85.312v46.208A256.064 256.064 0 0 0 256 384 213.31 213.31 0 0 0 42.688 597.376v341.312h938.688V597.376A213.31 213.31 0 0 0 768 384a256.064 256.064 0 0 0-213.312-252.48V85.312zm298.624 384a128 128 0 0 1 128 128v256H768zm-85.312 384h-128V640h-85.312v213.376h-128V426.688h341.312v426.688zm-426.688 0H128v-256a128 128 0 0 1 128-128zm90.752-512a170.752 170.752 0 0 1 330.56 0z" />
  </svg>
);
export default SvgCastle2;
