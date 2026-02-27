import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserInvisibleFilled = ({
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
    <path d="M490.624 85.312a234.688 234.688 0 1 0 0 469.376 234.688 234.688 0 0 0 0-469.376M1006.464 768s-71.296 192-259.84 192a249.15 249.15 0 0 1-107.84-23.808l-41.472 41.472-60.288-60.352 30.592-30.592A354.2 354.2 0 0 1 486.784 768s71.424-192 259.84-192c41.472 0 77.312 9.28 107.904 23.808L896 558.336l60.352 60.352-30.656 30.656A354.5 354.5 0 0 1 1006.464 768m-140.928-58.56L705.408 869.568c12.736 3.2 26.432 5.12 41.152 5.12C858.176 874.688 911.68 768 911.68 768s-15.104-30.272-46.08-58.56zm-77.632-43.008c-12.8-3.2-26.56-5.12-41.344-5.12C634.752 661.312 581.44 768 581.44 768s15.232 30.272 46.336 58.56zM406.848 797.76 395.776 768l11.072-29.824v-.064l.064-.192.192-.384.384-.96a204 204 0 0 1 4.736-11.328 453.5 453.5 0 0 1 86.656-127.936H341.248a256 256 0 0 0-256 256v85.376h413.44a453.1 453.1 0 0 1-86.656-128 296 296 0 0 1-4.672-11.328l-.32-.96-.192-.384v-.128l-.064-.128z" />
  </svg>
);
export default SvgUserInvisibleFilled;
