import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDam2 = ({
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
    <path d="M128 85.312h768v768h42.624v85.376h-384v-85.312h42.688V426.688H426.624v426.688h42.688v85.312h-384v-85.312H128v-768zm85.376 768h127.872l.064-426.624h-128v426.688zm-.064-512h597.312v-170.56H213.312V341.44zm597.312 85.376h-128v426.688h128z" />
  </svg>
);
export default SvgDam2;
