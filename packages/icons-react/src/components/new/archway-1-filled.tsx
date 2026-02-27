import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArchway1Filled = ({
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
    <path d="M85.312 85.312h853.312v213.376H814.272l16.448 128h107.904V512h-96.96l59.392 463.552-84.608 10.88L755.648 512H266.944l-59.328 474.304-84.672-10.56L180.992 512h-95.68v-85.312h106.304l16-128H85.312V85.376zm208.32 213.376-16 128h191.68v-128zm260.992 0v128h190.08l-16.448-128z" />
  </svg>
);
export default SvgArchway1Filled;
