import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGenderMale = ({
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
    <path d="M576 128h320v320h-85.312V273.664L665.856 418.56a298.688 298.688 0 1 1-60.352-60.352l144.832-144.832H576zM426.688 384a213.312 213.312 0 1 0 0 426.688 213.312 213.312 0 0 0 0-426.688" />
  </svg>
);
export default SvgGenderMale;
