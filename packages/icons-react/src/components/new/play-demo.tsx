import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlayDemo = ({
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
    <path d="M85.312 85.312h853.312v85.376H896V768H615.04l170.624 170.688-60.352 60.288L512 785.664 298.624 999.04l-60.288-60.288L408.96 768H128V170.688H85.312zm128 85.376v512h597.312v-512zm213.312 106.624 199.104 149.376L426.688 576V277.312z" />
  </svg>
);
export default SvgPlayDemo;
