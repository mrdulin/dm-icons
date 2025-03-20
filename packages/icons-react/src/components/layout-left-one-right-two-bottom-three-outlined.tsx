import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayoutLeftOneRightTwoBottomThreeOutlined = ({
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
    <g fill="currentColor" transform="rotate(-90 9 9)">
      <rect width={4.5} height={5} y={13} rx={1} />
      <rect width={4.5} height={4.5} rx={1} transform="rotate(90 2.25 2.25)" />
      <rect
        width={4.5}
        height={4.5}
        y={6.5}
        rx={1}
        transform="rotate(90 2.25 8.75)"
      />
      <rect width={4.5} height={5} x={13.5} y={13} rx={1} />
      <rect width={4.5} height={5} x={6.75} y={13} rx={1} />
      <rect width={11.25} height={11} x={6.75} rx={1} />
    </g>
  </svg>
);
export default SvgLayoutLeftOneRightTwoBottomThreeOutlined;
