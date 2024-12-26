import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalendarOutlined = ({
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
    <path d="M12 2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1V1a1 1 0 1 1 2 0v1h4V1a1 1 0 0 1 2 0zM3 6a.5.5 0 0 0-.5.5V14a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V6.5A.5.5 0 0 0 13 6zm6 3h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1" />
  </svg>
);
export default SvgCalendarOutlined;
