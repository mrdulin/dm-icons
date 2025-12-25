import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSortOutlined = ({
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
    <path d="M14.525 13a1 1 0 0 1 1 1H15.5c0 .552-.423 1-.975 1H8.5a1 1 0 0 1 0-2ZM4.025 1c.413 0 .75.336.75.75v12.917c-.209.215-.45.334-.75.333-.301 0-.585-.118-.797-.333L.72 12.076A.77.77 0 0 1 .72 11a.746.746 0 0 1 1.062 0l1.49 1.564V1.75A.75.75 0 0 1 4.025 1M12.5 9a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm-1.99-4a1 1 0 0 1 1 1c-.01.552-.448 1-1 1H8.5a1 1 0 0 1 0-2ZM9.5 1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2Z" />
  </svg>
);
export default SvgSortOutlined;
