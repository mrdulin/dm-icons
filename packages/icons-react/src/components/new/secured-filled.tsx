import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSecuredFilled = ({
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
    <path d="M938.624 168.128 512 18.816 85.312 168.128V512c0 176.064 108.096 299.2 208.896 375.616a842.7 842.7 0 0 0 198.4 110.72c4.8 1.792 9.728 3.52 14.592 5.184l4.8 1.664 4.8-1.664a580 580 0 0 0 27.84-10.432 842.7 842.7 0 0 0 185.152-105.536C830.528 811.136 938.624 688.064 938.624 512zm-469.248 489.6-180.992-181.12 60.288-60.288 120.704 120.64L710.72 295.552l60.352 60.352L469.376 657.6z" />
  </svg>
);
export default SvgSecuredFilled;
