import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChurchFilled = ({
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
    <path d="M469.312 42.688V128H384v85.312h85.312v41.792L256 404.48V512H85.312v426.688h277.312v-192a149.312 149.312 0 1 1 298.688 0v192h277.312V512H768V404.48L554.624 255.04v-41.792H640V128h-85.376V42.688zM256 853.312h-85.376v-256H256zm512 0v-256h85.312v256zM512 682.624a64 64 0 0 0-64 64v192h128v-192a64 64 0 0 0-64-64" />
  </svg>
);
export default SvgChurchFilled;
