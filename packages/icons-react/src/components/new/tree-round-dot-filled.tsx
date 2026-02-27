import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTreeRoundDotFilled = ({
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
    <path d="M832 981.312a149.312 149.312 0 0 1-42.624-292.48v-91.52a42.69 42.69 0 0 0-42.688-42.624H277.376a42.69 42.69 0 0 0-42.688 42.624v91.52a149.376 149.376 0 1 1-85.312 0v-91.52a128 128 0 0 1 128-128h192V335.168a149.376 149.376 0 1 1 85.312 0v134.144h192a128 128 0 0 1 128 128v91.52A149.376 149.376 0 0 1 832 981.312" />
  </svg>
);
export default SvgTreeRoundDotFilled;
