import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUpOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 12"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.724 2.435 1.282 4a.745.745 0 0 1-1.062 0 .766.766 0 0 1 0-1.074L2.679.333c.209-.215.497-.335.797-.334.3 0 .584.118.796.333L6.78 2.925A.77.77 0 0 1 6.78 4a.746.746 0 0 1-1.062 0l-1.49-1.564v8.814a.752.752 0 0 1-1.503 0z" />
  </svg>
);
export default SvgArrowUpOutlined;
