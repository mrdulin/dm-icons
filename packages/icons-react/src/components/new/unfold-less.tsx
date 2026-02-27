import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUnfoldLess = ({
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
    <path d="M341.312 152.96 512 323.648 682.688 152.96l60.352 60.352L512 444.352l-231.04-231.04zM512 579.648l231.04 231.04-60.352 60.352L512 700.352 341.312 871.04l-60.288-60.352z" />
  </svg>
);
export default SvgUnfoldLess;
