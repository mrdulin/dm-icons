import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsbFilled = ({
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
    <path d="M170.624 85.312h682.688v384h85.312v469.376H85.312V469.312h85.312zm597.376 384V170.688H256v298.624zM341.312 277.184h85.504v85.504h-85.504V277.12zm256 0h85.504v85.504h-85.504V277.12z" />
  </svg>
);
export default SvgUsbFilled;
