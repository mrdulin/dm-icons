import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChineseOneOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.006-2C13.107-2 14-1.105 14-.006v12.012A1.995 1.995 0 0 1 12.006 14H-.006A1.995 1.995 0 0 1-2 12.006V-.006C-2-1.107-1.105-2-.006-2zm0 1H-.006A.995.995 0 0 0-1-.006v12.012c0 .548.446.994.994.994h12.012a.995.995 0 0 0 .994-.994V-.006A.995.995 0 0 0 12.006-1" />
    <path d="M.5 6.4V5h11v1.4z" />
  </svg>
);
export default SvgChineseOneOutlined;
