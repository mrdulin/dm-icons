import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserVisibleFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376M1006.464 768s-71.296 192-259.84 192c-188.48 0-259.84-192-259.84-192s71.424-192 259.84-192c188.48 0 259.84 192 259.84 192m-206.592-42.688H693.248v85.376h106.624zM406.848 797.76 395.776 768l11.072-29.824v-.064l.064-.192.192-.384.384-.96a204 204 0 0 1 4.736-11.328 453.5 453.5 0 0 1 86.656-127.936H341.248a256 256 0 0 0-256 256v85.376h413.44a453.1 453.1 0 0 1-86.656-128 296 296 0 0 1-4.672-11.328l-.32-.96-.192-.384v-.128l-.064-.128z" />
  </svg>
);
export default SvgUserVisibleFilled;
