import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBondIssueNewOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.5 6.744a6 6 0 0 0-1.7-.244c-1.455 0-2.79.518-3.829 1.38A2.5 2.5 0 1 0 9.43 9.821 6 6 0 0 0 8.8 12.5H2A1.5 1.5 0 0 1 .5 11V4A1.5 1.5 0 0 1 2 2.5h13A1.5 1.5 0 0 1 16.5 4zM3.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path d="M15 17.1a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m-.66-5.17h-1.988a.663.663 0 0 0 0 1.325h1.988v1.987a.663.663 0 0 0 1.325 0v-1.987h1.988a.663.663 0 0 0 0-1.325h-1.988V9.942a.663.663 0 0 0-1.325 0z" />
  </svg>
);
export default SvgBondIssueNewOutlined;
