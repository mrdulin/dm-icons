import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderOpenOutlined = ({
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
    <path d="M13.25 6.442H2.75L1 10.996v-8.13C1 1.837 1.784 1 2.75 1h3.5c.293.002.565.16.726.42l1.497 3.313h4.777zM3.625 8H15l-2.179 5.684c-.252.799-.96 1.331-1.75 1.316H1z" />
  </svg>
);
export default SvgFolderOpenOutlined;
