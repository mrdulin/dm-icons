import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChurch = ({
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
    <path d="M469.312 42.688V128H384v85.312h85.312v41.792L256 404.48V512H85.312v426.688h853.312V512H768V404.48L554.624 255.04v-41.792H640V128h-85.376V42.688zM512 329.408l170.624 119.488v404.48H640V682.624a128 128 0 1 0-256 0v170.688h-42.688v-404.48L512 329.472zM256 853.312h-85.376v-256H256zm213.312 0V682.624a42.688 42.688 0 1 1 85.312 0v170.688zm298.688 0v-256h85.312v256z" />
  </svg>
);
export default SvgChurch;
