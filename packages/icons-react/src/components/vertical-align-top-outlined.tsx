import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVerticalAlignTopOutlined = ({
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
    <path d="M1.146 2C.513 2 0 1.552 0 1s.513-1 1.146-1h13.708C15.487 0 16 .448 16 1s-.513 1-1.146 1zm6.856 14c-.557 0-1.008-.434-1.008-.97V7.379l-3.272 3.244c-.394.39-1.033.39-1.427 0a.994.994 0 0 1 0-1.414l4.279-4.243a2.03 2.03 0 0 1 2.852 0l4.279 4.243a.994.994 0 0 1 0 1.414c-.394.39-1.033.39-1.427 0l-3.267-3.24v7.647c0 .536-.452.97-1.009.97" />
  </svg>
);
export default SvgVerticalAlignTopOutlined;
