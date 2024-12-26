import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocationOutlined = ({
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
    <path d="M8 0C5.239 0 3 2.263 3 5.054 3 7.697 6.218 13 8 13s5-5.303 5-7.946C13 2.263 10.761 0 8 0m0 2.868c1.306 0 2.364 1.07 2.364 2.39S9.306 7.647 8 7.647s-2.364-1.07-2.364-2.39S6.694 2.867 8 2.867M1.75 14.5h12.5a.75.75 0 1 1 0 1.5H1.75a.75.75 0 1 1 0-1.5" />
  </svg>
);
export default SvgLocationOutlined;
