import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExpand = ({
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
    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v7H4c2.003 0 3 1.018 3 3v2.501l7-.001a.5.5 0 0 0 .492-.41L14.5 14V2a.5.5 0 0 0-.41-.492zM11.24 3c1.35 0 1.75.389 1.75 1.596V7.25a.75.75 0 0 1-1.492.102l-.007-.102-.001-1.68-3.46 3.46a.75.75 0 0 1-1.133-.976l.073-.084 3.468-3.47H8.75a.75.75 0 0 1-.102-1.493L8.75 3z" />
  </svg>
);
export default SvgExpand;
