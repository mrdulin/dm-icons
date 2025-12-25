import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBarChartOutlined = ({
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
    <path d="M10.292 2.111c.713 0 1.291.578 1.291 1.292v8.61a1.292 1.292 0 1 1-2.583 0v-8.61c0-.714.578-1.292 1.292-1.292M5.986 6.417c.713 0 1.292.578 1.292 1.291v4.306a1.292 1.292 0 0 1-2.584 0V7.708c0-.713.579-1.291 1.292-1.291m8.611 1.722c.714 0 1.292.578 1.292 1.292v2.583a1.292 1.292 0 0 1-2.583 0V9.43c0-.714.578-1.292 1.291-1.292M2.972 15.028H15.89a.861.861 0 0 1 0 1.722H2.11a.86.86 0 0 1-.861-.861V2.11a.861.861 0 1 1 1.722 0z" />
  </svg>
);
export default SvgBarChartOutlined;
