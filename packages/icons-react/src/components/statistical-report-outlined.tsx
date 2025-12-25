import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStatisticalReportOutlined = ({
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
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M12.4 1c.884 0 1.6.696 1.6 1.556v10.888c0 .86-.716 1.556-1.6 1.556H3.6c-.884 0-1.6-.696-1.6-1.556V2.556C2 1.696 2.716 1 3.6 1Zm-.174 1H3.77A.834.834 0 0 0 3 2.748v10.465c0 .412.344.747.769.747h8.457a.7.7 0 0 0 .571-.192.66.66 0 0 0 .198-.555V2.748A.76.76 0 0 0 12.226 2m-.993 6.824c.215 0 .39.175.39.39v1.477a.389.389 0 1 1-.779 0V9.213c0-.214.175-.389.39-.389M9.056 6.57a.39.39 0 0 1 .388.389v3.733a.47.47 0 0 1-.388.389.39.39 0 0 1-.39-.389V6.958a.39.39 0 0 1 .39-.39M6.8 7.658c.215 0 .389.174.389.389v2.644a.389.389 0 0 1-.778 0V8.047c0-.215.174-.39.389-.39M4.622 5.324a.39.39 0 0 1 .39.39v4.977a.47.47 0 0 1-.39.389.39.39 0 0 1-.389-.389V5.713a.39.39 0 0 1 .39-.389"
      />
    </g>
  </svg>
);
export default SvgStatisticalReportOutlined;
