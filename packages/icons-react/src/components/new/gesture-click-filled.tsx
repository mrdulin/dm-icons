import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureClickFilled = ({
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
    <path d="M426.624 167.04V21.248H512V167.04zm-110.272 67.584-103.04-103.04L152.96 192 256 295.04l60.352-60.352zm152.96-29.376c-53.248 0-96.448 43.2-96.448 96.448v344l-114.176-22.528a80.13 80.13 0 0 0-82.24 34.176l-40.512 60.8L319.36 956.8c22.208 28.928 56.704 45.888 93.248 45.888H714.88c50.624 0 95.616-32.384 111.616-80.448l76.032-228.288A117.63 117.63 0 0 0 850.24 555.2l-154.624-90.24a117.86 117.86 0 0 0-59.328-16H565.76v-147.2c0-53.248-43.2-96.448-96.448-96.448zm256-73.6-103.04 103.04 60.352 60.288 103.04-103.04z" />
  </svg>
);
export default SvgGestureClickFilled;
