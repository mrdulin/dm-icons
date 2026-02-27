import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGestureUpAndDownFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m264.456 22.016-243.2-.128V107.2l79.872.064a555.14 555.14 0 0 0 0 638.848H21.192v85.312h243.2V618.688h-85.248v89.6a469.63 469.63 0 0 1 0-563.2v89.6h85.312zm75.776 218.496a96.45 96.45 0 0 0-35.264 131.776l171.968 297.92-110.144 37.568c-30.72 10.432-52.032 38.4-54.144 70.72l-4.672 72.96 278.144 114.88a117.63 117.63 0 0 0 103.68-6.848L951.624 808.32a117.63 117.63 0 0 0 56.448-125.44l-48.32-235.776a117.63 117.63 0 0 0-114.688-94.016l-179.072-.832A117.63 117.63 0 0 0 606.664 368l-61.12 35.264-73.6-127.424a96.45 96.45 0 0 0-131.712-35.328" />
  </svg>
);
export default SvgGestureUpAndDownFilled;
