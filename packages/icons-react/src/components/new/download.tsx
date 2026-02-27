import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDownload = ({
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
    <path d="M554.688 128v408.96L704 387.712l60.352 60.352L512 700.352 259.712 448 320 387.648l149.376 149.376V128zM192 597.312v213.376h640V597.312h85.376V896H106.688V597.312z" />
  </svg>
);
export default SvgDownload;
