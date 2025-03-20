import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileUndoneOutlined = ({
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
    <path d="M12.964 5.165A6.5 6.5 0 0 0 6.81 16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4.662a2 2 0 0 1 1.286.469 399 399 0 0 1 4.613 3.934q.311.27.403.762M3 3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm0 4a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm8.5 9a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m2.272-3.377L12.66 11.51l1.113-1.113c.346-.345.317-.832 0-1.149s-.803-.346-1.149 0l-1.113 1.113-1.113-1.113c-.766-.766-1.915.383-1.149 1.15l1.113 1.112-1.113 1.113c-.766.766.383 1.915 1.15 1.15l1.112-1.114 1.113 1.113c.766.766 1.915-.383 1.15-1.149" />
  </svg>
);
export default SvgFileUndoneOutlined;
