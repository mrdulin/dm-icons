import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileExcelFilled = ({
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
    <path d="M128 42.688h426.688V384H896v597.312H128zm512 539.52V512h-85.312v70.272L512 623.36l-42.688-41.152V512H384v70.272c0 23.168 9.408 45.312 26.112 61.44l40.448 38.976-40.448 38.976C393.472 737.728 384 759.936 384 783.104v70.208h85.312v-70.208L512 741.952l42.688 41.152v70.208H640v-70.208c0-23.168-9.408-45.376-26.112-61.44l-40.448-39.04 40.448-38.976c16.64-16 26.112-38.208 26.112-61.44M896 280.96v17.728H640v-256h17.664z" />
  </svg>
);
export default SvgFileExcelFilled;
