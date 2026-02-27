import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCodeOff = ({
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
    <path d="m999.04 512-211.2-211.2-60.352 60.352L878.336 512 771.648 618.688l60.416 60.352zm-85.376 341.376-743.04-743.04-60.288 60.352 128 128L24.96 512l211.2 211.2 60.288-60.352L145.664 512l152.96-152.96 554.688 554.688z" />
  </svg>
);
export default SvgCodeOff;
