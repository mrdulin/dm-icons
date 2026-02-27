import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownload11 = ({
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
    <path d="M42.688 85.312h938.688V768H42.688zM128 170.688v512h768v-512zM554.688 256v198.72l65.28-62.592 59.072 61.632-167.04 160-166.976-160 59.008-61.632 65.28 62.592V256zM128 853.312h768v85.376H128z" />
  </svg>
);
export default SvgDownload11;
