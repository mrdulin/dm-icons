import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDelete1Filled = ({
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
    <path d="M320 128h384V42.688H320zm618.624 128v-85.312H85.312V256h86.592l21.312 725.312H830.72L852.096 256zM692.992 455.296 572.352 576l120.64 120.704-60.288 60.288L512 636.352l-120.704 120.64-60.288-60.288L451.648 576l-120.64-120.704 60.288-60.288L512 515.648l120.704-120.64z" />
  </svg>
);
export default SvgDelete1Filled;
