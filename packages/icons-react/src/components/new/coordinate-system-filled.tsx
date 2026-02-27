import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoordinateSystemFilled = ({
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
    <path d="M992.32 874.624H31.68l480.32-832zM554.624 534.656V384h-85.312v150.656L323.84 655.872l54.592 65.536L512 610.176l133.504 111.232 54.592-65.536-145.408-121.216z" />
  </svg>
);
export default SvgCoordinateSystemFilled;
