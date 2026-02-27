import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompass1Filled = ({
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
    <path d="M597.376 512a85.312 85.312 0 1 1-170.688 0 85.312 85.312 0 0 1 170.688 0M512 981.312a469.312 469.312 0 0 0 0-938.624 469.312 469.312 0 0 0 0 938.688zM42.688 512l370.752-98.56L512 42.624l98.56 370.688L981.44 512l-370.88 98.56L512 981.312 413.44 610.56z" />
  </svg>
);
export default SvgCompass1Filled;
