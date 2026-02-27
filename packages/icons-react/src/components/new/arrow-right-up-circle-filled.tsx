import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRightUpCircleFilled = ({
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
    <path d="M843.904 843.84A469.312 469.312 0 1 1 180.16 180.224a469.312 469.312 0 0 1 663.68 663.68zm-211.2-211.2 67.84-309.184-309.184 67.84 90.496 90.624L300.8 662.848l60.352 60.352 181.056-181.12z" />
  </svg>
);
export default SvgArrowRightUpCircleFilled;
