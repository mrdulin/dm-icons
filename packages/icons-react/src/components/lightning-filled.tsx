import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLightningFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.525 0h-3.8c-.4 0-.8.3-1 .7l-2 7c-.2.7.3 1.3.9 1.3h3.7l-1.5 7 7.3-9.4c.5-.6 0-1.6-.8-1.6h-3l1.1-3.7c.2-.7-.3-1.3-.9-1.3" />
  </svg>
);
export default SvgLightningFilled;
