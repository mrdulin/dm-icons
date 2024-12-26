import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloseOutlined = ({
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
    <path d="m8 6.943 2.724-2.724a.747.747 0 1 1 1.057 1.057L9.057 8l2.724 2.724a.747.747 0 1 1-1.057 1.057L8 9.057l-2.724 2.724a.747.747 0 1 1-1.057-1.057L6.943 8 4.219 5.276a.747.747 0 0 1 1.057-1.057z" />
  </svg>
);
export default SvgCloseOutlined;
