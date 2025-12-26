import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScatterChartOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillOpacity={0.8}
      d="M2.333 1.167v10.5h10.5v1.166H1.167V1.167zm7 1.75a.583.583 0 1 0 0 1.166.583.583 0 0 0 0-1.166m-1.75.583a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M5.833 7a1.167 1.167 0 1 0 0 2.333 1.167 1.167 0 0 0 0-2.333M3.5 8.167a2.333 2.333 0 1 1 4.667 0 2.333 2.333 0 0 1-4.667 0m6.417 0a1.167 1.167 0 1 1 2.333 0 1.167 1.167 0 0 1-2.333 0"
    />
  </svg>
);
export default SvgScatterChartOutlined;
