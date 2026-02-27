import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTerminalRectangle = ({
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
    <path d="M981.376 128v768H42.688V128zM896 213.312H128v597.376h768zm-85.312 512H512V640h298.688zM429.696 512 270.08 671.744l-60.352-60.288L309.056 512l-99.264-99.456 60.352-60.288z" />
  </svg>
);
export default SvgTerminalRectangle;
