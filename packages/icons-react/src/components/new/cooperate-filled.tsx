import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCooperateFilled = ({
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
    <path d="m384 67.648 128 128 128-128L1020.352 448 512 956.352 3.712 448zM451.712 256 384 188.352 124.352 448 512 835.648l40.768-40.704-101.12-101.056L512 633.6l101.12 101.12 40.64-40.768-100.992-101.056 60.288-60.352 101.12 101.12 57.536-57.6L640 444.352l-128 128L323.712 384z" />
  </svg>
);
export default SvgCooperateFilled;
