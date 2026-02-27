import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentGridFilled = ({
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
    <path d="M309.312 87.168h-224v224h224zm85.312 0v224h234.688v-224zm320 0v224h224v-224zm224 309.312h-224v234.688h224zm0 320h-224v224h224zm-309.312 224v-224H394.624v224zm-320 0v-224h-224v224zm-224-309.312h224V396.48h-224zm309.312 0V396.48h234.688v234.688z" />
  </svg>
);
export default SvgComponentGridFilled;
