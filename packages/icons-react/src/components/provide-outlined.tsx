import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProvideOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 20"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M2 5a2 2 0 0 0-2 2v7h1v6h2v-6h2v6h2V7h4V5zm7 0v2h9V5zm0 4v2h9V9zm0 4v2h9v-2zm0 4v2h9v-2z" />
  </svg>
);
export default SvgProvideOutlined;
