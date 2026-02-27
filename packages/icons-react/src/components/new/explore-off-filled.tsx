import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExploreOffFilled = ({
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
    <path d="m85.504 25.152-.192-.128-60.288 60.288 126.272 126.336A469.312 469.312 0 0 0 812.288 872.64l126.4 126.4 60.16-60.16L85.312 25.344zm139.776 460.8 144.704-55.616 223.68 223.68-55.68 144.704-82.688-230.016-230.016-82.688zM921.728 741.12a469.312 469.312 0 0 0-638.784-638.784l261.12 261.12 189.44-72.896L660.608 480z" />
  </svg>
);
export default SvgExploreOffFilled;
