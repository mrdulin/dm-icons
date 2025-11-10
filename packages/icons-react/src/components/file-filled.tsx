import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileFilled = ({
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
    <path d="M2.5 0h4.662a2 2 0 0 1 1.286.469 399 399 0 0 1 4.613 3.934q.474.41.439 1.339V14a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2M4 5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2z" />
  </svg>
);
export default SvgFileFilled;
