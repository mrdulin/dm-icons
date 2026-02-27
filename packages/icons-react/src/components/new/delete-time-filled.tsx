import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeleteTimeFilled = ({
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
    <path d="M320 128h384V42.688H320zm618.624 128v-85.312H85.312V256h86.592l21.312 725.312h340.096a318.6 318.6 0 0 1-64-192v-448h85.312v230.4a319.1 319.1 0 0 1 291.008-97.408l6.4-218.304zm-384 533.312a234.688 234.688 0 1 1 469.376 0 234.688 234.688 0 0 1-469.376 0M892.352 832 832 771.648V693.44h-85.376v113.536L832 892.352z" />
  </svg>
);
export default SvgDeleteTimeFilled;
