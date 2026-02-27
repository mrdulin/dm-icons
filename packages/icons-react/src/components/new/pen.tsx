import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPen = ({
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
    <path d="m698.112 110.72-71.296 130.176a384 384 0 0 1-204.16 175.808l-163.392 60.16L227.84 735.68l241.536-241.536 60.352 60.352-241.536 241.536 258.752-31.488 60.48-165.76A384 384 0 0 1 779.2 396.16l130.24-73.6 41.984 74.304-130.24 73.6a298.7 298.7 0 0 0-133.632 157.632l-78.4 214.784L121.6 902.144l59.264-487.424 212.288-78.08a298.7 298.7 0 0 0 158.784-136.832L623.36 69.696l74.816 41.024z" />
  </svg>
);
export default SvgPen;
