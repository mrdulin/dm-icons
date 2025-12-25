import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuFoldOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 14 14"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.167 2.333h11.666V3.5H1.167zm0 2.453L3.647 7l-2.48 2.214zm4.083 1.63h7.583v1.167H5.25zM1.167 10.5h11.666v1.166H1.167z" />
  </svg>
);
export default SvgMenuFoldOutlined;
