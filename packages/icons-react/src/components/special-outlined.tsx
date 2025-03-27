import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpecialOutlined = ({
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
    <path d="M8.66 11.65a194 194 0 0 0-6.528-2.72l.598-1.027q1.512.557 3.497 1.331l2.5-1.794H2.107V6.355q.239-.382.634-1.185H.5V4.085h2.75q.054-.11.155-.334a73 73 0 0 0 .419-.92H1.122V1.745h3.162q.018-.053.066-.165.335-.855.466-1.231l1.435.065-.55 1.33h5.177V2.83H5.241q-.282.646-.556 1.255H11.5V5.17H4.147q-.276.598-.598 1.173h6.857v1.255L7.554 9.756l1.818.715z" />
  </svg>
);
export default SvgSpecialOutlined;
