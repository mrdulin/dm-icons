import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftRight1 = ({
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
    <path d="m152.96 704 209.728-209.664 60.352 60.352-106.688 106.624H832v85.376H316.352L423.04 853.312l-60.352 60.352zM192 277.312h515.648L601.024 170.688l60.288-60.352L871.04 320 661.312 529.664l-60.288-60.352 106.624-106.624H192z" />
  </svg>
);
export default SvgArrowLeftRight1;
