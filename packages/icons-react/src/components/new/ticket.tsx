import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTicket = ({
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
    <path d="M42.688 170.688h938.688v233.344l-24.32 11.52a106.688 106.688 0 0 0 0 192.896l24.32 11.52v233.344H42.688V619.968l24.32-11.52a106.688 106.688 0 0 0 0-192.896l-24.32-11.52zM128 256v96.32A191.81 191.81 0 0 1 213.376 512c0 66.624-33.92 125.248-85.376 159.68V768h768v-96.32A191.81 191.81 0 0 1 810.688 512c0-66.56 33.92-125.248 85.312-159.68V256zm213.376 128h341.312v85.312H341.376zm0 170.688h341.312V640H341.376z" />
  </svg>
);
export default SvgTicket;
