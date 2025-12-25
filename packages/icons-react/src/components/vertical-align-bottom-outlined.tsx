import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerticalAlignBottomOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.99 8.618V.97c0-.536.45-.97 1.008-.97.557 0 1.008.434 1.008.97v7.652l3.272-3.245a1.014 1.014 0 0 1 1.427 0 .994.994 0 0 1 0 1.414l-4.279 4.243a2.03 2.03 0 0 1-2.852 0L2.295 6.79a.994.994 0 0 1 0-1.414 1.014 1.014 0 0 1 1.427 0zM1.145 16C.513 16 0 15.552 0 15s.513-1 1.146-1h13.708c.633 0 1.146.448 1.146 1s-.513 1-1.146 1z" />
  </svg>
);
export default SvgVerticalAlignBottomOutlined;
