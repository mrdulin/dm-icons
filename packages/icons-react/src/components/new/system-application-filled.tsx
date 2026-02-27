import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSystemApplicationFilled = ({
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
    <path d="M938.624 85.312H85.312v384h853.312zM298.88 234.688v85.504h-85.568v-85.504h85.504zm170.688 0v85.504H384v-85.504h85.504zm469.056 320H85.312v384h853.312zM298.88 704v85.504h-85.568V704h85.504zm170.688 85.504H384V704h85.504v85.504z" />
  </svg>
);
export default SvgSystemApplicationFilled;
