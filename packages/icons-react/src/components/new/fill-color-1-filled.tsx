import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFillColor1Filled = ({
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
    <path d="M512 2.24 1021.824 512l-83.136 83.2v2.176h-2.176L632.704 901.12a170.69 170.69 0 0 1-241.344 0L122.88 632.704a170.69 170.69 0 0 1 0-241.344l189.376-189.44L195.584 85.312 256 24.96l116.672 116.672zM372.672 262.272l-189.44 189.44c-16.64 16.64-24.96 38.4-24.96 60.288H901.12L512 122.88l-79.04 79.104 139.392 139.392L512 401.664zM928 784.64l56.128 70.848a90.88 90.88 0 0 1 0 110.08C970.688 982.592 950.656 993.6 928 993.6c-22.592 0-42.624-11.008-56.064-27.968a90.88 90.88 0 0 1 0-110.144z" />
  </svg>
);
export default SvgFillColor1Filled;
