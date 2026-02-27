import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgForkFilled = ({
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
    <path d="M832 42.688a149.312 149.312 0 0 0-42.624 292.48v91.52a42.69 42.69 0 0 1-42.688 42.624H277.376a42.69 42.69 0 0 1-42.688-42.624v-91.52a149.376 149.376 0 1 0-85.312 0v91.52a128 128 0 0 0 128 128h192v134.144a149.376 149.376 0 1 0 85.312 0V554.688h192a128 128 0 0 0 128-128v-91.52A149.376 149.376 0 0 0 832 42.688" />
  </svg>
);
export default SvgForkFilled;
