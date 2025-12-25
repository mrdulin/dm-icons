import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayoutTopBottomOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="currentColor">
      <rect
        width={8}
        height={18}
        x={5}
        y={-5}
        rx={1}
        transform="rotate(90 9 4)"
      />
      <rect
        width={8}
        height={18}
        x={5}
        y={5}
        rx={1}
        transform="rotate(90 9 14)"
      />
    </g>
  </svg>
);
export default SvgLayoutTopBottomOutlined;
