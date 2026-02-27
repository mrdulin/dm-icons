import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoCamera21 = ({
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
    <path d="M1024 180.672v660.864L725.312 670.848v182.464H0V170.688h725.312v189.184zm-298.688 278.72v113.216l213.376 121.856V331.392zM640 768V256H85.312v512zm-72.384-256L256 719.744V304.256zm-226.304-48.256v96.512L413.76 512z" />
  </svg>
);
export default SvgVideoCamera21;
