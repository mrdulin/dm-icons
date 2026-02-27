import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnimation1 = ({
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
    <path d="M488.328 2.41 637.53 250.337l281.902 65.295L729.69 534.106l25.058 288.286-266.42-112.88-266.421 112.88 24.997-288.286-189.68-218.473 281.9-65.295L488.329 2.47zm0 155.768-98.003 162.756-185.043 42.827 124.506 143.36-16.384 189.26 174.863-74.09 174.863 74.09-16.444-189.2 124.506-143.42-185.042-42.827-97.883-162.756zm379.602 404.48 99.389 99.388-56.802 56.802-99.389-99.388zM534.71 808.238l99.388 99.387-56.802 56.802-99.388-99.388zm264.192 0 99.388 99.387-56.802 56.802L742.1 865.04z" />
  </svg>
);
export default SvgAnimation1;
