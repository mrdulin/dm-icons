import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownload1Filled = ({
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
    <path d="M981.376 85.312H42.688V768h938.688zM679.04 453.76 512 613.76l-166.976-160 59.008-61.632 65.28 62.592V256h85.376v198.72l65.28-62.592zM896 853.312H128v85.376h768z" />
  </svg>
);
export default SvgDownload1Filled;
