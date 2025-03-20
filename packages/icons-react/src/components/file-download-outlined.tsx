import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileDownloadOutlined = ({
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
    <path d="M3.5 0h4.662a2 2 0 0 1 1.286.469 399 399 0 0 1 4.613 3.934q.474.41.439 1.339V14a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.48 8.506V5.5a.5.5 0 0 0-.5-.5H7.455a.5.5 0 0 0-.5.5v3.008H5a.5.5 0 0 0-.38.823l2.967 3.505a.5.5 0 0 0 .763 0l2.968-3.505a.5.5 0 0 0-.38-.823z" />
  </svg>
);
export default SvgFileDownloadOutlined;
