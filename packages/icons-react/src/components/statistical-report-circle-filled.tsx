import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStatisticalReportCircleFilled = ({
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
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M6.387 9.667a.846.846 0 0 0-.857.833v1.667c0 .46.384.833.857.833a.846.846 0 0 0 .857-.833V10.5a.846.846 0 0 0-.857-.833m-3.23-2.5c-.473 0-.857.326-.857.729v4.375c0 .402.384.729.857.729s.857-.327.857-.73V7.897c0-.403-.384-.73-.857-.73M9.617 5.5c-.473 0-.857.28-.857.625v6.25c0 .345.384.625.857.625s.857-.28.857-.625v-6.25c0-.345-.384-.625-.857-.625m3.24-2.5a.846.846 0 0 0-.857.833v8.334c0 .46.384.833.857.833a.846.846 0 0 0 .857-.833V3.833A.846.846 0 0 0 12.857 3" />
  </svg>
);
export default SvgStatisticalReportCircleFilled;
