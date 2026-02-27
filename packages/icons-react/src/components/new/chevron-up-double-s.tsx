import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChevronUpDoubleS = ({
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
    <path d="m512 259.584 211.2 211.2-60.352 60.352L512 380.288 361.152 531.136 300.8 470.784zm0 232.96 211.2 211.2-60.352 60.352L512 613.248 361.152 764.16 300.8 703.808l211.2-211.2z" />
  </svg>
);
export default SvgChevronUpDoubleS;
