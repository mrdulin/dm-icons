import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgColumn = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.5 1a.7.7 0 0 1 .7.7v8.4H15v2.8a2.1 2.1 0 0 1-2.1 2.1H3.1A2.1 2.1 0 0 1 1 12.9V1.7a.7.7 0 0 1 .7-.7zm.7 11.9a.699.699 0 0 0 1.4 0v-1.4h-1.4zM3 12h4v-1H3zm0-2h7V9H3zm2.624-6.025-2.179.317 1.577 1.537L4.65 8 6.6 6.976 8.549 8l-.372-2.17 1.577-1.538-2.18-.317L6.6 2z" />
  </svg>
);
export default SvgColumn;
