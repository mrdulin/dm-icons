import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUndoOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 14 14"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M4.685 1.633 2.889 3.429h6.677a4.058 4.058 0 0 1 0 8.116H3.25v-1.313h6.317a2.746 2.746 0 0 0 0-5.49H2.89l1.796 1.795-.928.928-3.38-3.38 3.38-3.38z"
    />
    <path
      fill="currentColor"
      d="M4.685 1.633 2.889 3.429h6.677a4.058 4.058 0 0 1 0 8.116H3.25v-1.313h6.317a2.746 2.746 0 0 0 0-5.49H2.89l1.796 1.795-.928.928-3.38-3.38 3.38-3.38z"
    />
  </svg>
);
export default SvgUndoOutlined;
