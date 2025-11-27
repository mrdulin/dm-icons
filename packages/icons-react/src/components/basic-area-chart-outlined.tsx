import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBasicAreaChartOutlined = ({
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
    <path d="M1.778 14.222H15.11a.889.889 0 0 1 0 1.778H.89A.89.89 0 0 1 0 15.111V.89a.889.889 0 1 1 1.778 0zM15 12H4v-1.375c2.96 0 3.782-2.054 4.733-4.432C9.706 3.759 10.81 1 14.45 1H15z" />
  </svg>
);
export default SvgBasicAreaChartOutlined;
