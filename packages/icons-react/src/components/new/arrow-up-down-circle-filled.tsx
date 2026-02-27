import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpDownCircleFilled = ({
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
    <path d="M512 981.312a469.312 469.312 0 1 0 0-938.624 469.312 469.312 0 0 0 0 938.624m21.376-576H426.688v192h-85.312v-192H234.688l149.312-192zM640 810.688l-149.312-192h106.688v-192h85.312v192h106.688z" />
  </svg>
);
export default SvgArrowUpDownCircleFilled;
