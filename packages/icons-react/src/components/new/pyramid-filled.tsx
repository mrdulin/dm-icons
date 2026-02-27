import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPyramidFilled = ({
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
    <path d="m469.376 126.336 189.44 336.704 45.248-82.24 306.816 557.888H12.48l456.96-812.352zm72.192 727.04h119.808v-128h-49.408zm205.184 0H866.56l-70.4-128h-49.408zM749.248 640 704 557.888 658.88 640z" />
  </svg>
);
export default SvgPyramidFilled;
