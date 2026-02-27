import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUpload = ({
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
    <path d="m512 110.336 252.352 252.352L704 422.976 554.688 273.664v408.96h-85.312v-408.96L320 423.04l-60.288-60.288zm-320 487.04v213.312h640V597.312h85.376V896H106.688V597.312H192z" />
  </svg>
);
export default SvgUpload;
