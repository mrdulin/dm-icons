import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWorkOffFilled = ({
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
    <path d="m85.504 25.152-.192-.128-60.288 60.288 192 192H85.312v640H856.96l81.728 81.728 60.16-60.16L85.312 25.344zm853.184 732.864v-480.64H704V106.624H320v32.64l85.312 85.376V192h213.376v85.312H457.984l480.64 480.704z" />
  </svg>
);
export default SvgWorkOffFilled;
