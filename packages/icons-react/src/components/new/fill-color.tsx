import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFillColor = ({
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
    <path d="m406.4 26.688 30.208 30.144 105.6 105.6L904.192 524.48l30.208 30.208-30.208 30.144L542.144 946.88 512 977.024l-30.144-30.144-362.048-362.048L89.6 554.688l30.208-30.208 331.84-331.84-75.328-75.52-30.208-30.144 60.352-60.352zM252.992 512h518.016L512 252.992zm518.08 85.312h-518.08L512 856.384zm114.24 144.64 33.472 42.24 22.592 28.544a90.88 90.88 0 0 1 0 110.144c-13.44 16.96-33.408 28.032-56.064 28.032-22.592 0-42.624-11.072-56.064-28.032a90.88 90.88 0 0 1 0-110.08l22.592-28.608z" />
  </svg>
);
export default SvgFillColor;
