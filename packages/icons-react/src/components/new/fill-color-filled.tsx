import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFillColorFilled = ({
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
    <path d="m406.4 26.688 528 528-422.4 422.4-422.4-422.4L451.648 192.64l-105.6-105.6zM252.992 512h518.016L512 252.992zm632.32 229.952 56.064 70.848a90.88 90.88 0 0 1 0 110.08c-13.44 16.96-33.408 28.032-56.064 28.032-22.592 0-42.624-11.072-56.064-28.032a90.88 90.88 0 0 1 0-110.08z" />
  </svg>
);
export default SvgFillColorFilled;
