import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRocketFilled = ({
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
    <path d="m768.128 557.568 96.448-96.448a384 384 0 0 0 112.512-271.552V46.912H834.432A384 384 0 0 0 562.88 159.36l-96.448 96.512-241.344-30.208L44.416 406.4 617.6 979.584l180.736-180.672zm-76.416 76.416 16.768 134.08-90.88 90.88-75.392-75.456zM390.016 332.288 240.512 481.792 165.056 406.4 256 315.52l134.08 16.768zM240.512 723.136 89.6 873.984l-60.352-60.352 150.848-150.848 60.352 60.352zm120.64 120.704L210.304 994.688l-60.288-60.352L300.8 783.488l60.288 60.352z" />
  </svg>
);
export default SvgRocketFilled;
