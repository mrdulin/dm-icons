import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCode = ({
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
    <path d="m24.96 483.712 211.2-211.2 60.352 60.352-150.848 150.848L296.512 634.56l-60.352 60.352zm349.952 372.416 191.36-765.44 82.816 20.672-191.36 765.44zM727.488 634.56l150.848-150.848-150.848-150.848 60.352-60.352 211.2 211.2-211.2 211.2z" />
  </svg>
);
export default SvgCode;
