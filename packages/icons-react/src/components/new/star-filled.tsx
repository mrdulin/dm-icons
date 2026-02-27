import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStarFilled = ({
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
    <path d="m512 26.88 123.904 356.288 377.088 7.68-300.544 227.904 109.184 361.024-309.568-215.424-309.632 215.424 109.184-361.024-300.544-227.84 377.088-7.68L512.064 26.88z" />
  </svg>
);
export default SvgStarFilled;
