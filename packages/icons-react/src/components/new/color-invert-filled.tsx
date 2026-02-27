import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgColorInvertFilled = ({
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
    <path d="m469.312 110.336-213.76 213.76a362.688 362.688 0 0 0 213.76 616.64zm85.312 830.4a362.24 362.24 0 0 0 213.248-103.232 321.1 321.1 0 0 0 81.856-124.544 362.75 362.75 0 0 0-81.28-388.864l-213.76-213.76v830.4z" />
  </svg>
);
export default SvgColorInvertFilled;
